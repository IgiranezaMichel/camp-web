import { gql } from "@apollo/client";

export const CREATE_AY_GRADE=gql`
mutation ($ayGrade:AyGradeInput){
    saveAyGrade(ayGradeInput:$ayGrade)
}
`
export const DELETE_AY_GRADE= gql`
mutation ($ayGradeId:ID){
    deleteAyGrade(ayGradeId:$ayGradeId)
}
`