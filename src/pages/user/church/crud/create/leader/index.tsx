import { Add, Church, Save } from "@mui/icons-material"
import { Avatar, Button, Chip, Dialog, TextField, Tooltip } from "@mui/material"
import { ReactNode } from "react"
import { useUserHavingDutyAtTheSameChurch } from "../../../../../../controller/duty/query"

export const AddChurchLeader = (props: { children: ReactNode, open: boolean,church:string,churchName:string }) => {
    const {response,refetch}=useUserHavingDutyAtTheSameChurch(props.church);
    console.log(props.church)
    console.log(response);
    return (
        <Dialog PaperProps={{ className: 'col-sm-6' }} open={props.open}>
            {response&&response.responseReady&&response.responseContent!=undefined&&
                <>
                <div>{props.children}</div>
            <div className="p-3">
                <div>
                    <Church />{props.churchName}
                </div>
                <div>
                    <Add className="float-end"/>
                </div>
                <TextField label='Enter Email' variant="standard" className="mb-2" fullWidth />
                {response.responseContent.length==0&&<div className="text-center">
                <Chip variant="outlined" className="bg-danger text-white fw-bold" label='No leader found for this church' />
                    </div>}
                {response.responseContent.length!=0&&response.responseContent.map((data)=>{
                    return <div className="text-center"><Chip variant="outlined" className="bg-danger text-white fw-bold" label='No leader found for this church' /></div>
                })}
            </div>

            <div className="modal-footer">
                <Button><Save /></Button>
            </div>
                </>
            }
        </Dialog>
    )
}