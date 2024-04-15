/* eslint-disable @typescript-eslint/no-explicit-any */
import { Close,LocationOn, Map } from "@mui/icons-material";
import { Avatar, Card, Chip,Tooltip } from "@mui/material";
import { useState } from "react";
import { MentorDetail } from "../../mentorDetail";
import { useInactiveCamp } from "../../../../../controller/camp/query";
import { PageInput } from "../../../../../types/pageInput";

export const CampHistory = () => {
    const [page,setPage]=useState<PageInput>({pageNumber:0,pageSize:10,sort:"id"});
    const { response } = useInactiveCamp(page);
    const [accountHolderDetail,setAccountHolderDetail]=useState({photo:'',name:'',email:'',open:false});
    console.log(response)
    return (
       <>
        <>
            {response != undefined && response.responseReady && response.responseContent && response.responseContent.content &&
                response.responseContent.content.length != 0 && response.responseContent.content.map((data:any, index:number) => {
                    return (
                        <Card variant="outlined" key={index} className="mb-2 border border-1 border-black rounded-0 p-2">
                            <div className="mb-2 border-bottom ">
                                <h4>{data.title}</h4>
                                <div className="d-flex">
                                <div className="mb-2 mx-3"><Map/>{data.address}</div>
                                <div className="mb-2"><LocationOn/>{data.location}</div>
                                </div>
                                <div className="d-flex">
                                <div className="mb-2"><b>From</b> {data.startingDate} <b>To</b> {data.endingDate}</div>
                                </div>
                                <div className="mb-2" ><span className="float-md-end" style={{clear:'both'}}>{data.cost} <b>FRW</b></span></div>
                            </div>
                            <div className="mb-2" >{data.description}</div>
                            <div className="">
                            <span className="flo"> 
                                    <Chip className="bg-primary text-white mx-2" label={'View Applicant'} avatar={<Avatar className="text-white bg-black">+</Avatar>}/>
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
            {response != undefined && response.responseReady && response.responseContent && response.responseContent.content &&
                response.responseContent.content.length == 0 &&<div className="text-center p-4 bg-body-tertiary">
                    -- No camp data found --
                    </div>}
                    {/* mentor Details */}
                    <MentorDetail data={accountHolderDetail}>
                        <div className="position-absolute w-100">
                        <Close className="float-end  text-white fw-bold bg-danger"  onClick={()=>setAccountHolderDetail({...accountHolderDetail,open:false})} style={{zIndex:1}}/>
                        </div>
                    </MentorDetail>

        </>
        {response != undefined && response.responseReady && response.responseContent && response.responseContent.content &&
                response.responseContent.content.length == 0&&<div>

                    -- no data found --
                </div> }
       </>
    )
}