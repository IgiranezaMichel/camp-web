import { gql } from "@apollo/client";

export const FIND_CHURCHES_BY_TYPE = gql`
query($input:ChurchType){
    findAllByChurchType(input:$input){
  id
  name
  location
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
export const CHURCH_FIELD= gql`
query($input:ChurchType){
    findAllByChurchType(input:$input){
  id
  name
  churchList{
    id
    name
  }
}}
`