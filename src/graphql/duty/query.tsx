import { gql } from "@apollo/client";

export const FIND_USER_WORK_AT_THE_SAME_CHURCH = gql`
query($church:ID){
findUserWorkingAtTheSameChurch(church:$church){
  id
  name
  description
  accountHolder{
    name
    gender
    phoneNumber
    profilePicture
    timeStamp
  }
}}
`