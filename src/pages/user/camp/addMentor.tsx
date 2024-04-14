/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react"
import { useCampContext } from "../../../contexts/campContext"
import { Avatar, Button, Chip, CircularProgress, NativeSelect, TextField, TextareaAutosize } from "@mui/material";
import { Email, FindInPage, Person, Save } from "@mui/icons-material";
import { useFindAccountHolderByEmail } from "../../../controller/accountHolder/mutation";
import { AccountHolderInput } from "../../../types/accountHolderInput";
import { CampMentorInput } from "../../../types/campMentorInput";
import { useCreateCampMentor } from "../../../controller/campMentor/mutation";
import { ToastContainer, toast } from "react-toastify";

export const AddMentor = (props: { children: ReactNode, arrIndex: number }) => {
    const { content } = useCampContext();
    const [camp, setCamp] = useState<any>({});
    const [campId, setCampId] = useState('');
    const [email, setEmail] = useState('');
    const { findAccountHolderHandler } = useFindAccountHolderByEmail(email);
    const [accountHolder, setAccountHolder] = useState<AccountHolderInput>({ base64Profile: '', dob: '', email: '', gender: '', id: '', name: '', password: '', phoneNumber: '' });
    const [campMentor, setCampMentor] = useState<CampMentorInput>({ accountHolderEmail: accountHolder.email, campId: campId, description: '', id: '', role: '' })
    const findByEmailHandler = () => {
        findAccountHolderHandler().then(data => {
            if (data.data) {
                const result = data.data.findByEmail;
                if (result == null) {
                    alert('Email not found')
                }
                else {
                    setAccountHolder({ base64Profile: result.profilePicture, dob: '', email: result.email, gender: result.gender, id: result.id, name: result.name, password: '', phoneNumber: '' })
                    console.log(accountHolder.email, campMentor)
                }
            }
        })
    }
    useEffect(
        () => {
            const fetch = async () => {
                if (content != undefined && content.responseReady && content.responseContent && content.responseContent.length != 0) {
                    setCamp(content.responseContent.content[props.arrIndex]);
                    const result = content.responseContent.content[props.arrIndex];
                    setCampId(result.id);
                    setCampMentor({ ...campMentor, campId: result.id });
                }
            }
            fetch();
        }, [accountHolder, accountHolder.email, campMentor]
    )
    const { saveCampMentor } = useCreateCampMentor(campMentor);
    const saveMentorHandler = () => {
        saveCampMentor().then(
            data => {
                const result = data.data.saveOrUpdateCampMentor;
                const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
                const code = Number(splitting[0].split(' ')[0])
                const responseText = splitting[1];
                code == 200 ? toast.success(responseText) : toast.error(responseText);
            }
        )
    }
    return (
        <>
            {campId == '' && <div className="p-2"><CircularProgress /></div>}
            {campId != '' && <div className="p-2 col-12 overflow-hidden">
                <div className="sticky-top">{props.children}</div>
                <div className="p-2">
                    <div className="mb-2 fw-bold fs-4 border-bottom">{camp.title}</div>
                    {accountHolder.base64Profile != null && accountHolder.base64Profile.length != 0 && <div className="card">
                        <img src={accountHolder.base64Profile} />
                        <div className="card-text">
                            <div className="mb-2"><Person /> {accountHolder.name}</div>
                            <div className="mb-2"><Email /> {accountHolder.email}</div>
                            <NativeSelect onChange={(e) => setCampMentor({ ...campMentor, role: e.target.value })} fullWidth className="mb-3">
                                <option value="">select role</option>
                                <option value="admin">Admin</option>
                                <option value="mentor">mentor</option>
                            </NativeSelect>
                            <TextareaAutosize value={campMentor.description} onChange={(e) => setCampMentor({ ...campMentor, description: e.target.value })} placeholder="describe the role" minRows={3} className="col-12" />
                        </div>
                    </div>}
                    <TextField value={campMentor.accountHolderEmail} onChange={(e) => { setEmail(e.target.value); setCampMentor({ ...campMentor, accountHolderEmail: e.target.value }) }} fullWidth variant="standard" label="Mentor's Email" />
                    <div className="mt-1 mb-1">
                        <Chip avatar={<Avatar />} label='Mentor Name' />
                    </div>
                    <div className="modal-footer">
                        {accountHolder.base64Profile.length != 0 ?
                            <Button variant="contained" onClick={() => saveMentorHandler()}><Save className="fs-2" /></Button> : <Button onClick={() => findByEmailHandler()}><FindInPage /></Button>}
                    </div>
                </div>
            </div>}
            <ToastContainer />
        </>
    )
}