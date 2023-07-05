import { Add, Church, Save } from "@mui/icons-material"
import { Avatar, Button, Chip, Dialog, TextField } from "@mui/material"
import { ReactNode } from "react"

export const AddChurchLeader = (props: { children: ReactNode, open: boolean }) => {
    return (
        <Dialog PaperProps={{ className: 'col-sm-6' }} open={props.open}>
            <div>{props.children}</div>
            <div className="p-3">
                <div>
                    <Church />
                </div>
                <div>
                    <Add className="float-end"/>
                </div>
                <TextField label='Enter Email' variant="standard" className="mb-2" fullWidth />
                <Chip avatar={<Avatar />} label='name' />
            </div>

            <div className="modal-footer">
                <Button><Save /></Button>
            </div>
        </Dialog>
    )
}