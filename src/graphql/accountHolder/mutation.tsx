import { gql } from "@apollo/client";

export const CREATE_ACCOUNT_HOLDER=gql`
mutation($accountHolderInput:AccountHolderInput){
    saveOrUpdateAccountHolder(accountHolderInput:$accountHolderInput)
}
`
export const DELETE_ACCOUNT_HOLDER=gql`
mutation($id:ID){
    deleteAccountHolder(id:$id)
}
`