import { Save } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { ChurchInput } from "../../../../../types/chuchInput"
import { ChurchType } from "../../../../../enum/churchType"

export const Field=()=>{
    const [church,setChurch]=useState<ChurchInput>({location:'',name:'',type:ChurchType.FIELD});
    return (
        <>
        <TextField variant="standard" value={church.name} onChange={(e)=>setChurch({...church,name:e.target.value})} label='Field name' fullWidth  className="mb-3"/>
        <TextField variant="standard" value={church.location} onChange={(e)=>setChurch({...church,location:e.target.value})} label='Field Location' fullWidth className="mb-3"/>
        <div className="modal-footer">
            <Button variant="contained"><Save/></Button>
        </div>
        </>
    )
}