/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, NativeSelect, TextField } from "@mui/material"
import { BootstrapModal } from "../../../../component/modal"
import { useLevel } from "../../../../controller/level/query"
import { Link } from "react-router-dom";

export const CreateBook=()=>{
    const {response}=useLevel();
    return(
        <BootstrapModal id="addBook" modalTitle={<div>
            Add new Book
        </div>} size="modal-md">
            {response.responseReady&&response.responseContent&&response.responseContent&&response.responseContent.length!=0&&<div className="row p-1">
                <div className="col-md-6">
                    <TextField className="form-control mb-4 mt-2" variant="standard" label='Name'/>
                    <FormControl fullWidth className="">
                        <b  className="mb-3">Book cover</b>
                        <TextField type="file" className="form-control" variant="standard"/>
                    </FormControl>
                </div>
                <div className="col-md-6">
                <FormControl fullWidth className="mb-4">
                        <b >Book</b>
                        <TextField type="file" className="form-control" variant="standard"/>
                    </FormControl>
                    <FormControl fullWidth className="mb-2">
                        <b className="mb-3">Ay Level for the book</b>
                        <NativeSelect>
                            <option value="">Select Ay Level for this book</option>
                            {response.responseContent&&response.responseContent&&response.responseContent.length!=0&&response.responseContent.map((data:any,index:number)=>{
                                return <option key={index} value={data.id}>{data.name}</option>
                            })}
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>}
            {
                response.responseReady&&response.responseContent&&response.responseContent&&response.responseContent.length==0&&<div>
                    <span>Please add Adventist youth before adding any book?</span>
                    <Link data-dismiss="modal" to={'/admin/level'}><Button variant="contained">Add New ay</Button></Link>
                </div>
            }
        </BootstrapModal>
    )
}