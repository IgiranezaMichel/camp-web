import { gql } from "@apollo/client";

export const CREATE_OR_UPDATE_CAMP_MENTOR=gql`
mutation($input:CampMentorInput){
    saveOrUpdateCampMentor(input:$input)
}
`