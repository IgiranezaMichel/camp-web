/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../component/modal"
import { useBookContent } from "../../../../contexts/bookContent"
import { CircularProgress } from "@mui/material";

export const DeleteBook=(props:{arrIndex:number})=>{
    const {content}=useBookContent();
    const [book,setBook]=useState<any>({});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(content!=undefined&&content&&content.responseReady){
                  await  setBook(content.responseContent.content[props.arrIndex]);
                  console.log(book)
                }
            }
            fetch().then().catch(err=>console.log(err))
        }, [props.arrIndex,content]
    )
    
    return(
        <>
        {content!=undefined&&content&&!content.responseReady&&<>
        <CircularProgress/>
        </>}
        {content!=undefined&&content&&content.responseReady&&<BootstrapModal id="deleteBook" size="modal-lg" modalTitle={<div>
            Book Detail
        </div>}>
            <div>
                <div className="text-center">
                    Are you sure you want to delete <b>{book.name} ?</b>
                </div>
            </div>
        </BootstrapModal>}
        </>
    )
}