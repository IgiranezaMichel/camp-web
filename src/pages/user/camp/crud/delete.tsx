/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react"
import { useDeleteCamp } from "../../../../controller/camp/mutation"
import { useCampContext } from "../../../../contexts/campContext";
import { ToastContainer, toast } from "react-toastify";
import { Button, CircularProgress } from "@mui/material";

export const DeleteCamp=(props:{children:ReactNode,arrIndex:number})=>{
    const {content,updateContent}=useCampContext();
    const [camp,setCamp]=useState<any>({});
    const [campId,setCampId]=useState('');

    const {deleteHandler}=useDeleteCamp(campId);

    useEffect(
        ()=>{
            const fetch = async () => {
                if (content != undefined && content.responseReady && content.responseContent&& content.responseContent.length!=0) {
                    setCamp(content.responseContent.content[props.arrIndex]);
                    const result=content.responseContent.content[props.arrIndex];
                    setCampId(result.id);
                }
            }
            fetch();
        }
    )
    const deleteCampHandler=()=>{
        deleteHandler().then(
            data=>{
                const result = data.data.deleteCamp;
            const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
            const code = Number(splitting[0].split(' ')[0])
            const responseText = splitting[1];
            code == 200 ? toast.success(responseText) : toast.error(responseText);
            // updateContent();
            }
        )
    }
    return(
        <>
        {
            campId==''&&<div className="p-2">
                <CircularProgress/>
            </div>
        }
            {campId.length!=0&&<div className="p-2">
                {props.children}
                <div className="p-3">
                    Are you sure you want to remove <b>{camp.title}</b>? camp
                </div>
                <div className="modal-footer">
                    <Button onClick={()=>deleteCampHandler()} variant="contained">Delete</Button>
                </div>
            </div>}
            <ToastContainer/>
        </>
    )
}