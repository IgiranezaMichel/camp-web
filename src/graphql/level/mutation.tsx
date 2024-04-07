import { gql } from "@apollo/client";

export const CREATE_LEVELS = gql`
mutation($levelInput:LevelInput){
    saveOrUpdateLevel(levelInput:$levelInput)
}
`
export const DELETE_LEVELS = gql`
mutation($id:ID){
    deleteLevel(id:$id)
}
`