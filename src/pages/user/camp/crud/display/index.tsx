/* eslint-disable @typescript-eslint/no-explicit-any */
import { Close, Delete, LocationOn, Map } from "@mui/icons-material";
import { Avatar, Card, Chip, Dialog, Tooltip } from "@mui/material";
import { useState } from "react";
import { useCampContext } from "../../../../../contexts/campContext";
import { AddMentor } from "../../addMentor";
import { MentorDetail } from "../../mentorDetail";
import { DeleteCamp } from "../delete";
import { DisplayCampApplicant } from "../../campApplicant";

export const DisplayCamp = () => {
    const { content,updateContent } = useCampContext();
    const [openDeleteDialog,setOpenDeleteDialog]=useState(false);
    const [openAddMentorDialog,setOpenAddMentorDialog]=useState(false);
    const [arrIndex,setArrIndex]=useState(0);
    const [accountHolderDetail,setAccountHolderDetail]=useState({photo:'',name:'',email:'',open:false});
    const [campDetail,setCampDetail]=useState({open:false,campId:''});
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
                                    <Chip onClick={()=>{setArrIndex(index);setOpenAddMentorDialog(true)}}  className="bg-success text-white" label={'Add mentor'} avatar={<Avatar className="text-white bg-black">+</Avatar>}/>
                                    <Chip onClick={()=>{setCampDetail({campId:data.id,open:true})}}  className="bg-primary text-white mx-2" label={'View Applicant'} avatar={<Avatar className="text-white bg-black">+</Avatar>}/>
                                </span>
                                <span className="float-md-end"> <i className="d-block text-center">Mentors</i>
                                {data.campMentorList!=undefined&&data.campMentorList.length!=0&&data.campMentorList.map((data1:any)=>{
                                    return <Tooltip key={data1.id} title={
                                        <>
                                        <div className="mb-2"><b>Name </b>{data1.accountHolder.name}</div>
                                        <div className="mb-2"><b>Role </b>{data1.role}</div>
                                        <div className="mb-2"><b>Description </b>{data1.description}</div>
                                        </>
                                    } arrow>
                                        <Chip onClick={()=>{
                                            setAccountHolderDetail({email:data1.accountHolder.email,name:data1.accountHolder.name,open:true,photo:data1.accountHolder.profilePicture})
                                        }} label={data1.accountHolder.name} avatar={<Avatar src={data1.accountHolder.profilePicture}/>}/>
                                    </Tooltip>
                                })}
                                    {data.campMentorList!=undefined&&data.campMentorList.length==0&&<div className="p-1">
                                       -- no mentor found -- 
                                        </div>}
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
                    {/* mentor Details */}
                    <MentorDetail data={accountHolderDetail}>
                        <div className="position-absolute w-100">
                        <Close className="float-end  text-white fw-bold bg-danger"  onClick={()=>setAccountHolderDetail({...accountHolderDetail,open:false})} style={{zIndex:1}}/>
                        </div>
                    </MentorDetail>
                    {/* delete camp dialog */}
            {openDeleteDialog&&<Dialog open={openDeleteDialog} PaperProps={{className:'col-md-5'}}>
            <DeleteCamp arrIndex={arrIndex} >
                <div className="p-3">Delete Camp <Close className="float-end" onClick={()=>{setOpenDeleteDialog(false);updateContent()}}/></div>
            </DeleteCamp>
            </Dialog>}
            {/* add mentor */}
            {openAddMentorDialog&&<Dialog open={openAddMentorDialog} PaperProps={{className:'col-md-5'}}>
            <AddMentor arrIndex={arrIndex} >
                <div className="p-3 sticky-top">Add Mentor <Close className="float-end" onClick={()=>{setOpenAddMentorDialog(false);updateContent()}}/></div>
            </AddMentor>
            </Dialog>}
                {/* view camp applicant list*/}
                {campDetail.open&&campDetail.campId.length!=0&&
                <Dialog open={campDetail.open} maxWidth='lg' PaperProps={{className:'col-12  bg-white',elevation:9,}}>
                <DisplayCampApplicant data={campDetail}>
                    <div className="p-3">List of Camp Applicant <Close className="float-end" onClick={()=>setCampDetail({...campDetail,open:false})}/></div>
                </DisplayCampApplicant>
                </Dialog>}
        </>
    )
}