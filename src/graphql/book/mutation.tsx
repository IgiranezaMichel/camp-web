import { gql } from "@apollo/client";

export const CREATE_BOOK=gql`
mutation($bookInput:BookInput){
    saveOrUpdateBook(bookInput:$bookInput)
}
`
export const DELETE_BOOK=gql`
mutation($id:ID){
    saveOrUpdateBook(id:$id)
}
`