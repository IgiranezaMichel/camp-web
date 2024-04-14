import {useMutation } from "@apollo/client";
import { CREATE_ACCOUNT_HOLDER, DELETE_ACCOUNT_HOLDER, FIND_ACCOUNT_HOLDER_BY_EMAIL } from "../../graphql/accountHolder/mutation";
import { AccountHolderInput } from "../../types/accountHolderInput";

export const useSaveOrUpdateAccountHolder=(accountHolder:AccountHolderInput,churchId:string)=>{
    const [save]=useMutation(CREATE_ACCOUNT_HOLDER);
    const saveAccountHolder=async()=>{
    return await save({variables:{accountHolderInput:accountHolder,churchId:churchId}})
    }
    return {saveAccountHolder}
    }
    export const useDeleteAccountHolder=(id:string)=>{
        const [deleteAccountHolder]=useMutation(DELETE_ACCOUNT_HOLDER);
        const deleteHandler=async()=>{
        return await deleteAccountHolder({variables:{id:id}})
        }
        return {deleteHandler}
        }

export const useFindAccountHolderByEmail=(email:string)=>{
        const [findAccountHolder]=useMutation(FIND_ACCOUNT_HOLDER_BY_EMAIL);
        const findAccountHolderHandler=async()=>{
        return await findAccountHolder({variables:{email:email}})
        }
        return {findAccountHolderHandler}
        }