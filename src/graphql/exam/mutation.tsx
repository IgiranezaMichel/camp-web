import { gql } from "@apollo/client";

export const  CREATE_EXAM=gql`
mutation($examInput:ExamInput){
    saveExam(examInput:$examInput)
}
`
export const  DELETE_EXAM=gql`
mutation($id:ID){
    deleteExam(id:$id)
}
`