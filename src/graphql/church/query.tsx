import { gql } from "@apollo/client";

export const FIND_CHURCHES_BY_TYPE = gql`
query($input:ChurchType){
    findAllByChurchType(input:$input){
  id
  name
  churchList{
    id
    name
    churchList{
      id
      name
    }
  }
}}
`