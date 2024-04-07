import { Button, TextField } from "@mui/material"
import { BootstrapModal } from "../../../../component/modal"

export const CreateLevel=()=>{
    return(
        <>
        <BootstrapModal id="id" size="modal-md" modalTitle={<div>Add New Level / Club</div>}>
         <div className="p-3">
            <TextField label='Name' className="form-control mb-3" variant="standard"/>
            <TextField label='From Age' className="form-control mb-3" variant="standard"/>
            <TextField label='To Age' className="form-control mb-3" variant="standard"/>
            <label htmlFor="">Adventist Youth </label>
            <input type="file" className="form-control" />
         </div>
         <div className="modal-footer">
            <Button variant="contained" className="fw-bold rounded-0">Save</Button>
         </div>
      </BootstrapModal>
        </>
    )
}