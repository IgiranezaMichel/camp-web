import { gql } from "@apollo/client";

export const CAMP_PAGE = gql`
query($page:PageInput){
campPage(input:$page){
  pageNumber
  pageSize
  total
  content{
    id
    title 
    cost
    startingDate
    endingDate
    address
    location
    description
    content
  }
}}
`
export const ACTIVE_CAMP = gql`
  query ($page: PageInput) {
    activeCamp(input: $page) {
      pageSize
      total
      content {
        id
        title
        cost
        address
        startingDate
        endingDate
        description
        deadline
        content
        timeStamp
        campMentorList{
          role
          description
      accountHolder{
        id
        name
        gender
        email
        profilePicture
      }
    }
      }
    }
  }
`;
export const INACTIVE_CAMP = gql`
query ($page: PageInput) {
  inactiveCamp(input: $page) {
    pageNumber
    pageSize
    total
    content {
      id
      title
      cost
      address
      startingDate
      endingDate
      description
      location
      content
      timeStamp
      campMentorList{
        role
        description
    accountHolder{
      id
      name
      gender
      email
      profilePicture
    }
  }
    }
  }
}
`;
