/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save } from "@mui/icons-material"
import { Button, CircularProgress, FormControl, NativeSelect, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { ChurchInput } from "../../../../../types/chuchInput"
import { ChurchType } from "../../../../../enum/churchType"
import { useSaveOrUpdateChurch } from "../../../../../controller/church/mutation"
import { ToastContainer, toast } from "react-toastify"
import { useGetChurchListByType } from "../../../../../controller/church/query"
export const ChurchZone = () => {
    const [church, setChurch] = useState<ChurchInput>({ location: '', name: '', type: ChurchType.CHURCH });
    const { saveChurch } = useSaveOrUpdateChurch(church);
    const [field, setField] = useState('');
    const { response,refetch } = useGetChurchListByType(ChurchType.FIELD);
    useEffect(
        ()=>{
            const fetch=async()=>{
                await refetch();
            }
            fetch();
        },[ChurchType]
    )
    const saveChurchHandler = () => {
        if (church.churchId?.length == 0) {
            toast.error('Please select church district')
        } else {
            saveChurch().then(
                (data) => {
                    const result = data.data.saveOrUpdateChurch;
                    const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
                    const code = Number(splitting[0].split(' ')[0])
                    const responseText = splitting[1];
                    code == 200 ? toast.success(responseText) : toast.error(responseText);
                    refetch();
                }
            ).catch(err => console.log(err))
        }
    }
    return (
        <>
            {!response.responseReady && <div className="text-center p-5"><CircularProgress /></div>}
            {response.responseReady && response.responseContent && response.responseContent.length != 0 && <>
                <TextField variant="standard" value={church.name} onChange={(e) => setChurch({ ...church, name: e.target.value })} label='Church name' fullWidth className="mb-3" />
                <TextField variant="standard" value={church.location} onChange={(e) => setChurch({ ...church, location: e.target.value })} label='Church Location' fullWidth className="mb-3" />
                <FormControl fullWidth className="mb-3">
                    <NativeSelect onChange={(e) => setField(e.target.value)}>
                        <option value="">Select field</option>
                        {response.responseContent && response.responseContent.length != 0 &&
                            response.responseContent.map((data: any, index: number) => {
                                return <option value={index} key={index}>{data.name}</option>
                            })}
                    </NativeSelect>
                </FormControl>
                {/* churchList */}
                {field.length != 0 && response.responseContent && response.responseContent.length != 0 && response.responseContent[Number(field)] &&
                    response.responseContent[Number(field)].churchList && response.responseContent[Number(field)].churchList.length != 0 &&
                    <FormControl fullWidth className="mb-3">
                        <NativeSelect onChange={(e) => setChurch({ ...church, churchId: e.target.value })}>
                            <option value="">Select District</option>
                            {response.responseContent[Number(field)].churchList.map((data: any, index: number) => {
                                return <option value={data.id} key={index}>{data.name}</option>
                            })}
                        </NativeSelect>
                    </FormControl>
                }
                <div className="modal-footer">
                    <Button variant="contained" onClick={() => saveChurchHandler()}><Save /></Button>
                </div>
                <ToastContainer />
            </>}
            {response.responseReady && response.responseContent && response.responseContent.length == 0 &&
                <div>Please Add District first</div>}
        </>
    )
}