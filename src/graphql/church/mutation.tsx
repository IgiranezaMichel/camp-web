import { gql } from "@apollo/client";

export const CREATE_CHURCH= gql`
mutation($churchInput:ChurchInput){
    saveOrUpdateChurch(churchInput:$churchInput)
}
`
export const DELETE_CHURCH = gql`
mutation($id:ID){
deleteChurch(id:$id)
}
`