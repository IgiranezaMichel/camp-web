import { Button, Dialog } from "@mui/material"
import { ReactNode, useState } from "react"
import { useUpdateCampApplicantStatus } from "../../../../controller/campApplicant/mutation";
import JoditEditor from "jodit-react";
import { CampApplicantStatus } from "../../../../enum/campApplicationStatus";

export const ApplicantApplicationAction=(props:{data:{applicationId:string,action:string,open:boolean},children:ReactNode})=>{
    const [comment,setComment]=useState('');
    const {updateCampApplicationStatus}=useUpdateCampApplicantStatus(props.data.applicationId,props.data.action as CampApplicantStatus,comment);
    const updateHandler=()=>{
        updateCampApplicationStatus()
        .then(data=>{
            console.log(data);
        }).catch(err=>console.log(err));
    }
    return <Dialog maxWidth='sm' open={props.data.open}>
        <div>{props.children}</div>
        <div className="p-2 mt-3">Are you sure you want to <span className="text-success">{props.data.action}</span> this application</div>
        <JoditEditor value="Add comment" onChange={change=>setComment(change)}/>
        <div className="modal-footer p-2">
            <Button onClick={()=>updateHandler()} variant="contained">Yes</Button>
        </div>
    </Dialog>
}