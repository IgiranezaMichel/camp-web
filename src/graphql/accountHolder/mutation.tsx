import { gql } from "@apollo/client";

export const CREATE_ACCOUNT_HOLDER=gql`
mutation($accountHolderInput:AccountHolderInput,$churchId:ID!){
    saveOrUpdateAccountHolder(accountHolderInput:$accountHolderInput,churchId:$churchId)
}
`
export const DELETE_ACCOUNT_HOLDER=gql`
mutation($id:ID){
    deleteAccountHolder(id:$id)
}
`
export const FIND_ACCOUNT_HOLDER_BY_EMAIL=gql`
mutation($email:ID!){
    findByEmail(email:$email){id,gender,email,profilePicture,name}
}
`