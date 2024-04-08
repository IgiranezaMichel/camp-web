import {useMutation } from "@apollo/client";
import { CREATE_BOOK, DELETE_BOOK } from "../../graphql/book/mutation";
import { BookInput } from "../../types/bookInput";

export const useSaveOrUpdateBook=(bookInput:BookInput)=>{
    console.log(bookInput)
    const [save]=useMutation(CREATE_BOOK);
    const saveBook=async()=>{
    return await save({variables:{bookInput:bookInput}})
    }
    return {saveBook}
    }
    export const useDeleteBook=(id:string)=>{
        const [deleteBook]=useMutation(DELETE_BOOK);
        const deleteHandler=async()=>{
        return await deleteBook({variables:{id:id}})
        }
        return {deleteHandler}
        }