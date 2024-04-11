/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save } from "@mui/icons-material";
import { Button, Dialog, NativeSelect, TextField } from "@mui/material";
import { ReactNode, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSaveOrUpdateAccountHolder } from "../../../../../controller/accountHolder/mutation";
import { useGetField } from "../../../../../controller/church/query";
import { ChurchType } from "../../../../../enum/churchType";
import { AccountHolderInput } from "../../../../../types/accountHolderInput";

export const CreateAccountHolder = (props: { children: ReactNode ,open:boolean}) => {
    const [accountHolder, setAccountHolder] = useState<AccountHolderInput>({
        dob: '',
        email: '',
        gender: '',
        id: '',
        name: '',
        password: '',
        phoneNumber: '',
        base64Profile: '',
    });
    const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setAccountHolder({ ...accountHolder, base64Profile: reader.result as string })
            };
            reader.readAsDataURL(file);
        }
    }
    const { response } = useGetField(ChurchType.FIELD);
    const [selectedFieldIndex, setSelectedFieldIndex] = useState('');
    const [churchId, setChurchId] = useState('');
    const {saveAccountHolder}=useSaveOrUpdateAccountHolder(accountHolder,churchId);
    const saveAccountHolderHandler=()=>{
        if(churchId.length!=0){
            saveAccountHolder().then(
                data=>{
                    const result = data.data.saveOrUpdateAccountHolder;
                    const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
                    const code = Number(splitting[0].split(' ')[0])
                    const responseText = splitting[1];
                    code == 200 ? toast.success(responseText) : toast.error(responseText);
                }
            )
        }else toast.error('Please church is needed before submission');
    }
    return (
        <Dialog PaperProps={{ className: 'col-md-6 p-2' }} open={props.open}>
            <div className="mb-3 sticky-top fw-bold p-3 bg-white">{props.children}</div>
            {response.responseReady && response.responseContent && response.responseContent.length != 0 && <section className="col-sm-10 m-auto">
                {accountHolder.base64Profile.length!=0&&<div className="card col-sm-6 m-auto">
                    <img src={accountHolder.base64Profile} alt="" />
                </div>}
                <TextField value={accountHolder.name} onChange={(e) => setAccountHolder({ ...accountHolder, name: e.target.value })} variant="standard" className="mb-3" fullWidth label='Name' />
                <NativeSelect onChange={(e) => setAccountHolder({ ...accountHolder, gender: e.target.value })} fullWidth className="mb-3">
                    <option value="" >Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </NativeSelect>
                <label htmlFor="">Date of birth</label>
                <TextField type="date" value={accountHolder.dob} onChange={(e) => setAccountHolder({ ...accountHolder, dob: e.target.value })} variant="standard" className="mb-3" fullWidth />
                <TextField value={accountHolder.phoneNumber} onChange={(e) => setAccountHolder({ ...accountHolder, phoneNumber: e.target.value })} variant="standard" className="mb-3" fullWidth label='Phone Number' />
                <TextField value={accountHolder.email} onChange={(e) => setAccountHolder({ ...accountHolder, email: e.target.value })} variant="standard" className="mb-3" fullWidth label='Email' />
                <TextField type="file" onChange={imgHandler} variant="standard" className="mb-3" fullWidth label='User name' />
                <label htmlFor="">Field</label>
                <NativeSelect fullWidth className="mb-3" onChange={(e) => setSelectedFieldIndex(e.target.value)}>
                    <option value="">Select Field</option>
                    {response.responseReady && response.responseContent && response.responseContent.map((data: any, index: number) => {
                        return <option value={index} key={index}>{data.name}</option>
                    })}
                </NativeSelect>
                {selectedFieldIndex.length != 0 && response.responseContent[Number(selectedFieldIndex)] && response.responseContent[Number(selectedFieldIndex)].churchList.length != 0 &&
                    <>
                        <label htmlFor="">Church</label>
                        <NativeSelect fullWidth className="mb-3" onChange={(e) => setChurchId(e.target.value)}>
                            <option value="">Select Church</option>
                            {response.responseContent[Number(selectedFieldIndex)].churchList.map((data: any, index: number) => {
                                return <option value={data.id} key={index}>{data.name}</option>
                            })}
                        </NativeSelect>
                        {churchId.length!=0&&<div className="modal-footer">
                            <Button variant="contained" onClick={()=>saveAccountHolderHandler()}><Save /></Button>
                        </div>}
                    </>
                }
            </section>}
            {response.responseReady && response.responseContent && response.responseContent.length == 0 && <div>
                Please add church for the christian to join
            </div>}
            <ToastContainer/>
        </Dialog>
    )
}