/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Dialog, NativeSelect, TextField, TextareaAutosize} from "@mui/material";
import { ReactNode, useState } from "react";
import { Role } from "../../../../../enum/Role";
import { Email, Wc } from "@mui/icons-material";
import { DutyInput } from "../../../../../types/dutyInput";
import { useUpdateAccountHolderDuty } from "../../../../../controller/duty/mutation";
import { ToastContainer, toast } from "react-toastify";
export default function ChangeUserRole(props:{children:ReactNode,open:boolean,data:{id:string,churchId:string,name:string,gender:string,email:string,profile:string,phone:string}}) {
    const [duty,setDuty]=useState<DutyInput>({
        description:'',
        name:'',
        churchId:'',
        accountHolderId:props.data.id
        ,id:''
    });
    
    const [role,setRole]=useState<Role>(Role.CHRISTIAN);
    const {saveUpdateHandler}=useUpdateAccountHolderDuty(duty,role);
    const saveUpdate=()=>{
        if(role==Role.CHRISTIAN){
            setDuty({...duty,churchId:props.data.churchId});
            saveUpdateHandler().then( data=>{
                const result = data.data.updateAccountHolderDuty;
                const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
                const code = Number(splitting[0].split(' ')[0])
                const responseText = splitting[1];
                code == 200 ? toast.success(responseText) : toast.error(responseText);
            });
        }
    }
    const dutyForm=<>
        <TextField value={duty.name} onChange={(e)=>setDuty({...duty,name:e.target.value})} fullWidth className="mb-2" variant="standard" label='Duty Name'/>
        <TextareaAutosize minRows={2} placeholder="Describe duty" onChange={(e)=>setDuty({...duty,description:e.target.value})}  className="mb-2 col-12"/>
        {role!=undefined&&role==Role.CHRISTIAN&&<div className="modal-footer">
            <Button onClick={()=>saveUpdate()} variant="contained">Approve Duty</Button>
        </div>}
    </>
  return (
    <Dialog open={props.open} PaperProps={{className:'col-sm-6'}}>
      <div className="p-3 sticky-top bg-white">{props.children}</div>
      <div className="p-4">
        <div className="card mb-3">
            <img src={props.data.profile} className="card" />
        </div>
        <div className="mb-2 d-flex"><Avatar src={props.data.profile}/> <div className="card border-0 fw-bolder d-flex justify-content-center">{props.data.name}</div></div>
        <div className="mb-2"><Wc/> {props.data.gender}</div>
        <div className="mb-2"><Email/>{props.data.email}</div>
        <div className="mb-2">{props.data.phone}</div>
      <NativeSelect className="mb-2" variant="standard" fullWidth onChange={(e)=>setRole(e.target.value as Role)}>
        <option value="">Select position of duty</option>
        <option value={Role.CHRISTIAN}>Church leader</option>
        <option value={Role.CHURCH}>Pastor</option>
        <option value={Role.FIELD}>Field Leader</option>
        <option value={Role.UNION}>Union Leader</option>
      </NativeSelect>
      {
        role!=undefined&&<>{dutyForm}</>
      }
      </div>
      <ToastContainer/>
    </Dialog>
  )
}
