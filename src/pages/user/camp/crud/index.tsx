/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Card, Chip, Dialog } from "@mui/material";
import { useCampContext } from "../../../../contexts/campContext"
import { Close, Delete, LocationOn, Map } from "@mui/icons-material";
import { useState } from "react";
import { DeleteCamp } from "./delete";

export const DisplayCamp = () => {
    const { content,updateContent } = useCampContext();
    const [openDeleteDialog,setOpenDeleteDialog]=useState(false);
    const [arrIndex,setArrIndex]=useState(0);
    return (
        <>
            {content != undefined && content.responseReady && content.responseContent && content.responseContent.content &&
                content.responseContent.content.length != 0 && content.responseContent.content.map((data:any, index:number) => {
                    return (
                        <Card variant="outlined" key={index} className="mb-2 border border-1 border-black rounded-0 p-2">
                            <div className="mb-2 border-bottom ">
                                <h4>{data.title}</h4>
                                <div className="d-flex">
                                <div className="mb-2 mx-3"><Map/>{data.address}</div>
                                <div className="mb-2"><LocationOn/>{data.location}</div>
                                </div>
                                <div className="mb-2" ><span className="float-md-end" style={{clear:'both'}}>{data.cost} <b>FRW</b></span></div>
                            </div>
                            <div className="mb-2" >{data.description}</div>
                            <div className="">
                            <span className="flo"> 
                                    <Chip onClick={()=>{setArrIndex(index);setOpenDeleteDialog(true)}} label={'Delete camp'} className="bg-danger mx-2 text-white fw-bold" avatar={<Avatar className="p-2 bg-white"><Delete className="text-dark"/></Avatar>}/>
                                    <Chip className="bg-success text-white" label={'Add mentor'} avatar={<Avatar className="text-white bg-black">+</Avatar>}/>
                                </span>
                                <span className="float-md-end"> <i className="d-block text-center">Mentors</i>
                                    <Chip  label='Mike Jones' avatar={<Avatar/>}/>
                                    <Chip label='Mike Jones' avatar={<Avatar/>}/>
                                </span>
                            </div>
                        </Card>
                    )
                })
            }
            {content != undefined && content.responseReady && content.responseContent && content.responseContent.content &&
                content.responseContent.content.length == 0 &&<div className="text-center p-4 bg-body-tertiary">
                    -- No camp data found --
                    </div>}
            {openDeleteDialog&&<Dialog open={openDeleteDialog} PaperProps={{className:'col-md-5'}}>
            <DeleteCamp arrIndex={arrIndex} >
                <div className="p-3">Delete Camp <Close className="float-end" onClick={()=>{setOpenDeleteDialog(false);updateContent()}}/></div>
            </DeleteCamp>
            </Dialog>}
        </>
    )
}