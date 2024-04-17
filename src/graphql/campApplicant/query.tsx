import { gql } from "@apollo/client";

export const CAMP_APPLICANT_PAGE=gql`
query($input:PageInput,$campId:ID){
    campApplicantPage(input:$input,campId:$campId){
    pageNumber
    pageSize
    total
    content{
      id
      campApplicantStatus
      paymentCode
      telephone
      comment
      accountHolder{
        id
        name
        dob
        profilePicture
      }
    }
  }}
`