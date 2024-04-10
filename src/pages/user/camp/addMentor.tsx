/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react"
import { useCampContext } from "../../../contexts/campContext"
import { Avatar, Button, Chip, CircularProgress, TextField } from "@mui/material";
import { AddBoxSharp, Save } from "@mui/icons-material";

export const AddMentor = (props: { children: ReactNode, arrIndex: number }) => {
    const { content } = useCampContext();
    const [camp, setCamp] = useState<any>({});
    const [campId, setCampId] = useState('');
    console.log(content)
    useEffect(
        () => {
            const fetch = async () => {
                if (content != undefined && content.responseReady && content.responseContent && content.responseContent.length != 0) {
                    setCamp(content.responseContent.content[props.arrIndex]);
                    const result = content.responseContent.content[props.arrIndex];
                    setCampId(result.id);
                }
            }
            fetch();
        }
    )
    return (
        <>
            {campId == '' && <div className="p-2"><CircularProgress /></div>}
            {campId != '' && <div className="p-2 col-12 overflow-hidden">
                {props.children}
                <div className="p-2">
                    <div className="mb-2 border-bottom">{camp.title}</div>
                    <div><b>Camp title </b>{camp.endingDate}</div>
                    <div><b>Camp Location </b>{camp.location}</div>
                    <div className="position-absolute  col-11">
                    <AddBoxSharp className=" float-end rounded-circle bg-secondary text-white p-1" />
                    </div>
                    <TextField fullWidth variant="standard" label="Mentor's Email"/>
                    <div className="mt-1 mb-1">
                    <Chip avatar={<Avatar/>}  label='Mentor Name'/>
                    </div>
                    <div className="modal-footer">
                        <Button><Save/></Button>
                    </div>
                </div>
            </div>}
        </>
    )
}