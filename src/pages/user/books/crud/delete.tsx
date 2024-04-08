/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../component/modal"
import { useBookContent } from "../../../../contexts/bookContent"
import { Button, CircularProgress } from "@mui/material";
import { useDeleteBook } from "../../../../controller/book/mutation";
import { toast } from "react-toastify";

export const DeleteBook=(props:{arrIndex:number})=>{
    const {content,updateContent}=useBookContent();
    const [book,setBook]=useState<any>({});
    const [bookId,setBookId]=useState('');
    const {deleteHandler}=useDeleteBook(bookId);
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(content!=undefined&&content&&content.responseReady){
                    setBook(content.responseContent.content[props.arrIndex]);
                    setBookId(content.responseContent.content[props.arrIndex].id);
                  console.log(book)
                }
            }
            fetch().then().catch(err=>console.log(err))
        }, [props.arrIndex,content]
    )
    const deleteBookHandler=()=>{
        deleteHandler().then(data=>{
            const result = data.data.deleteBook;
            const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
            const code = Number(splitting[0].split(' ')[0])
            const responseText = splitting[1];
            code == 200 ? toast.success(responseText) : toast.error(responseText);
            updateContent();
        });
    }
    return(
        <>
        {content!=undefined&&content&&!content.responseReady&&<>
        <CircularProgress/>
        </>}
        {content!=undefined&&content&&content.responseReady&&<BootstrapModal id="deleteBook" size="modal-sm" modalTitle={<div>
           Delete book
        </div>}>
            <div>
                <div className="text-center">
                    Are you sure you want to delete <b>{book.name} ?</b>
                </div>
                <div className="modal-footer">
                    <Button className="bg-danger text-white fw-bold" onClick={()=>deleteBookHandler()}>Delete</Button>
                </div>
            </div>
        </BootstrapModal>}
        </>
    )
}