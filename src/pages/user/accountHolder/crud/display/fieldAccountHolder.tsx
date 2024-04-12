/* eslint-disable @typescript-eslint/no-explicit-any */
import { Church, Close, Email, Key, LocationOn, Lock, LockPerson, Wc } from "@mui/icons-material";
import { Avatar, Card, Chip, NativeSelect, Pagination, TextField } from "@mui/material";
import { useState } from "react";
import { useFindingAccountHolderHavingSameRole } from "../../../../../controller/duty/query";
import { Role } from "../../../../../enum/Role";
import { PageInput } from "../../../../../types/pageInput";
import ChangeUserRole from "../create/changeUserRole";
export const DisplayFieldAccountHolder=()=>{
    const [page,setPage]=useState<PageInput>({pageNumber:0,pageSize:10,sort:"id"});
    const {response,refetch}=useFindingAccountHolderHavingSameRole(page,Role.FIELD);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        event;
        setPage({...page,pageNumber:value});
      };
      const [open,setOpen]=useState(false);
    const [data,setData]=useState({id:'',name:'',gender:'',email:'',profile:'',phone:'',churchId:''})
    return(
        <>
        {response.responseReady&&response.responseContent!=undefined&& 
        <>
            <Card elevation={9}>
            <div className="row p-2">
                <div className="col-12 mb-2 border-bottom py-3">
                    <div className="display-6">Total Field Leader {response&&response.responseReady&&response.responseContent!=undefined&&<span className="badge bg-primary">{response.responseContent.total}</span>}</div>
                </div>
                <div className="col-md-4 d-flex card justify-content-center border-0">
                    <TextField variant="standard" label='Search' fullWidth/>
                </div>
                <div className="col-md-4 card d-flex justify-content-center border-0">
                    <NativeSelect fullWidth onChange={(e)=>setPage({...page,sort:e.target.value})}>
                        <option value="id">Select To sort</option>
                        <option value="accountHolder.name">Names</option>
                        <option value="description">Description</option>
                        <option value="church">Sort user by church</option>
                    </NativeSelect>
                </div>
                <div className="col-md-4  ">
                    <div className="float-md-end p-3">
                        <span className="d-flex">{response.responseContent.pageSize!=0?response.responseContent.pageNumber+1:0} page out {response.responseContent.pageSize}
                        <Pagination variant="outlined" shape="rounded" count={1} page={page.pageSize} onChange={handleChange}/>
                        </span> 
                    </div>
                </div>
            </div>
        </Card>
          {response&&response.responseContent&&response.responseContent!=undefined&&response.responseContent.content!=undefined&&response.responseContent.content.length!=0&&
          response.responseContent.content.map((data:any)=>{
            return <Card elevation={9} className="mt-3">
            <section className="row">
                <div className="card p-0 col-md-3">
                <img src={data.accountHolder.profilePicture} className="card-img"/>
                </div>
                <div className="card rounded-0 col-md-5 d-flex justify-content-center">
                    <div className="mb-2"><b>Name</b> {data.accountHolder.name}</div>
                    <div className="mb-2"><Wc/> {data.accountHolder.gender}</div>
                    <div className="mb-2"><Email/> {data.accountHolder.email}</div>
                    <div className="mb-2"><Church/> {data.church.name}</div>
                    <div className="mb-2"><LocationOn/> {data.church.location}</div>
                </div>
                <div className="card col-md-4 justify-content-center p-3 rounded-0">
                <div>
                    <div><Chip className="mb-3" color="primary" label={data.name} avatar={<Avatar><LockPerson/></Avatar>}/></div>
                    <div><Church/>{data.church.name}</div>
                    <div><Key/>{data.description}</div>
                    <div className="modal-footer">
                        <Chip onClick={()=>{setData({
                            id:data.accountHolder.id,
                            email:data.accountHolder.name,
                            gender:data.accountHolder.gender,
                            name:data.accountHolder.name,
                            profile:data.accountHolder.profilePicture,
                            phone:data.accountHolder.phoneNumber,
                            churchId:data.church.id
                        });setOpen(true)}} avatar={<Lock className="text-white"/>} color="success" label='Change responsibility'/>
                    </div>
                </div>
                </div>
            </section>
            
            </Card>
          })}
            {response&&response.responseContent&&response.responseContent!=undefined&&response.responseContent.content!=undefined&&response.responseContent.content.length==0&&
            <div className="p-5 text-center">-- No data found --</div>}
        </>}
        {open&&<ChangeUserRole data={data} open={open}>
            <div>Add leader <Close className="float-end" onClick={()=>{setOpen(false);refetch()}}/></div>
        </ChangeUserRole>}
        </>
    )
}
