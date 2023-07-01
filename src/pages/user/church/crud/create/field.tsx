import { Save } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"

export const Field=()=>{
    return (
        <>
        <TextField variant="standard" label='Field name' fullWidth  className="mb-3"/>
        <TextField variant="standard" label='Field Location' fullWidth className="mb-3"/>
        <div className="modal-footer">
            <Button variant="contained"><Save/></Button>
        </div>
        </>
    )
}