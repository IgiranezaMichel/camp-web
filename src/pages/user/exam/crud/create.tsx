import { Save} from "@mui/icons-material"
import { Button, Dialog, NativeSelect, TextField, TextareaAutosize } from "@mui/material"
import { ReactNode } from "react"

export const CreateExam=(props:{open:boolean,children:ReactNode})=>{
    return(
        <Dialog open={props.open} >
            <div className="col-sm-12">{props.children}</div>
            <div className="col-sm-11 m-auto">
            <TextField className="mb-3" fullWidth variant="standard" label='Exam Title'/>
            <TextareaAutosize className="col-12 mb-3" placeholder="Description" minRows={3} />
            <NativeSelect fullWidth className="mb-3">
                <option value="">Select Camp</option>
            </NativeSelect>
            <NativeSelect fullWidth className="mb-3">
                <option value="">Select level</option>
            </NativeSelect>
            <div className="modal-footer mb-3">
                <Button variant="contained"><Save/></Button>
            </div>
            </div>
        </Dialog>
    )
}