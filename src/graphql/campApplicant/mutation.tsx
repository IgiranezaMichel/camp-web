import { gql } from "@apollo/client";

export const CREATE_CAMP_APPLICATION=gql`
mutation($campApplicantInput:CampApplicantInput){
    saveOrUpdateCampApplicant(campApplicantInput:$campApplicantInput)
}
`
export const UPDATE_CAMP_APPLICANT_STATUS=gql`
mutation($campApplicantId:ID,$status:CampApplicantStatus,$comment:String){
    updateCampApplicantStatus(campApplicantId:$campApplicantId,status:$status,comment:$comment)
}
`