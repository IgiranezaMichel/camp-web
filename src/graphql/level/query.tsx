import { gql } from "@apollo/client";

export const DISPLAY_LEVELS=gql`
query{
 getAllLevels{
  id
  name
  fromAge
  toAge
  photo
}
}
`