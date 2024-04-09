import { gql } from "@apollo/client";

export const CREATE_CAMP = gql`
mutation($campInput:CampInput){
saveOrUpdateCamp(campInput:$campInput);
}
`
export const DELETE_CAMP = gql`
mutation($id:ID){
deleteCamp(id:$id);
}
`