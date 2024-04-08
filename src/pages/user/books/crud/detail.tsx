/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../component/modal"
import { useBookContent } from "../../../../contexts/bookContent"

export const BookDetail=(props:{arrIndex:number})=>{
    const {content}=useBookContent();
    const [book,setBook]=useState<any>({});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(content!=undefined){
                    setBook(content.responseContent.content[props.arrIndex]);
                }
            }
            fetch().then().catch(err=>console.log(err))
        }, [props.arrIndex]
    )
    
    return(
        <BootstrapModal id="detail" size="modal-lg"  modalTitle={<div>
            Book Detail
        </div>}>
            <div>
            <div className="text-center">
            {book !== undefined && (
                <embed className="m-auto h-auto col-12" type="application/pdf" src={`${book.fileEncoding}${book.file}`} />
            )}
        </div>
            </div>
        </BootstrapModal>
    )
}