import { Save } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { ChurchInput } from "../../../../../types/chuchInput"
import { ChurchType } from "../../../../../enum/churchType"
import { useSaveOrUpdateChurch } from "../../../../../controller/church/mutation"
import { ToastContainer, toast } from "react-toastify"

export const Field=()=>{
    const [church,setChurch]=useState<ChurchInput>({location:'',name:'',type:ChurchType.FIELD});
    const {saveChurch}=useSaveOrUpdateChurch(church);
    const saveChurchHandler=()=>{
        saveChurch().then(
            (data)=>{
            const result = data.data.saveOrUpdateChurch;
            const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
            const code = Number(splitting[0].split(' ')[0])
            const responseText = splitting[1];
            code == 200 ? toast.success(responseText) : toast.error(responseText);
            }
        )
        .catch(err=>console.log(err))
    }
    return (
        <>
        <TextField variant="standard" value={church.name} onChange={(e)=>setChurch({...church,name:e.target.value})} label='Field name' fullWidth  className="mb-3"/>
        <TextField variant="standard" value={church.location} onChange={(e)=>setChurch({...church,location:e.target.value})} label='Field Location' fullWidth className="mb-3"/>
        <div className="modal-footer">
            <Button variant="contained" onChange={()=>saveChurchHandler()}><Save/></Button>
        </div>
        <ToastContainer/>
        </>
    )
}