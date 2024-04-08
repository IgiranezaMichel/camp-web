import { gql } from "@apollo/client";

export const BOOK_PAGE = gql`
query($input:PageInput){
    bookPage(input:$input){
  pageNumber
  pageSize
  total
  content{
    id
    cover
    file
    name
    cover
    author
    fileEncoding
    publicationDate
    publisher
    serialNumber
    levels{
      name
      fromAge
      toAge
      photo
    }
  }
}
}
`