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