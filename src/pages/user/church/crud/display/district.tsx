/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Card, Chip, CircularProgress } from "@mui/material";
import { useChurchContext } from "../../../../../contexts/churchContext";
import { Add, Church, Close} from "@mui/icons-material";
import { AddChurchLeader } from "../create/leader";
import { useState } from "react";

export const DisplayDistrict=()=>{
    const { content } = useChurchContext();
    const [open,setOpen]=useState(false);
    return(
        <>
        {!content.responseReady && <div className="text-center p-5"><CircularProgress /></div>}
        {content && content.responseReady && content.responseContent && content.responseContent != undefined && content.responseContent.length != 0 &&
            content.responseContent.map((data: any, index: number) => {
                return <Card className="mt-3 p-3 rounded-0 border border-black" key={index}>
                    <h3 className="fw-bold">{data.name}</h3>
                    {data.churchList&&data.churchList.length!=0&&data.churchList.map((info:any)=>{
                        return <Card elevation={9} className="p-2 mt-3">
                    
                        <div className="mb-2"><Church/> {info.name}</div>
                        <div className="float-end"><Chip label={<span className="fw-bold">Total Churches <span className="badge bg-black">{info.churchList.length}</span></span>} /><b></b></div>
                        <Chip onClick={()=>setOpen(true)} avatar={<Avatar className="bg-black"><Add className="text-white"/></Avatar>} className="bg-primary text-white fw-bold" label='Add Leader' />
                        <Chip avatar={<Avatar />} className="bg-dark mx-1 text-white fw-bold" label='View Leader' />
                        <div className="modal-footer">
                        </div>
                        </Card>
                    })}
                    {data.churchList&&data.churchList.length==0&&<div className="p-4 text-center bg-body-secondary">
                        -- No District found --
                        </div>}
                </Card>
            })
        }
        <AddChurchLeader open={open}>
                <div className="p-3 mb-2 fw-bold">Add Church leader <Close className="float-end" onClick={()=>setOpen(false)}/></div>
            </AddChurchLeader>
    </>
    )
}