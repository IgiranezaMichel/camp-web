/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Card, Chip, CircularProgress } from "@mui/material";
import { useChurchContext } from "../../../../contexts/churchContext"
import { Add, Close, LocationOn } from "@mui/icons-material";
import { AddChurchLeader } from "./create/leader";
import { useState } from "react";

export const DisplayChurch = () => {
    const { content } = useChurchContext();
    const [open,setOpen]=useState(false);
    const [churchId,setChurchId]=useState('');
    const [churchName,setChurchName]=useState('');
    return (
        <>
            {!content.responseReady && <div className="text-center p-5"><CircularProgress /></div>}
            {content && content.responseReady && content.responseContent && content.responseContent != undefined && content.responseContent.length != 0 &&
                content.responseContent.map((data: any, index: number) => {
                    return <Card className="mt-3 p-3 rounded-0 border border-black" key={index}>
                        <h3 className="fw-bold">{data.name}</h3>
                        <div className="mb-2"><LocationOn/> {data.location}</div>
                        <div className="float-end"><Chip label={<span className="fw-bold">Total Districts <span className="badge bg-black">{data.churchList.length}</span></span>} /><b></b></div>
                        <Chip onClick={()=>setOpen(true)} avatar={<Avatar className="bg-black"><Add className="text-white"/></Avatar>} className="bg-primary text-white fw-bold" label='Add Leader' />
                        <Chip avatar={<Avatar />} className="bg-dark mx-1 text-white fw-bold" label='View Leader' />
                        <div className="modal-footer">
                        </div>
                    </Card>
                })
            }
           {open&&churchId.length!=0&&churchName.length!=0&& <AddChurchLeader open={open} church={churchId} churchName={churchName}>
                <div className="p-3 mb-2 fw-bold">Add Church leader <Close className="float-end" onClick={()=>setOpen(false)}/></div>
            </AddChurchLeader>}
        </>
    )
}