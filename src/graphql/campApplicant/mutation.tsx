import { gql } from "@apollo/client";

export const CREATE_CAMP_APPLICATION=gql`
mutation($campApplicantInput:CampApplicantInput){
    saveOrUpdateCampApplicant(campApplicantInput:$campApplicantInput)
}
`