import { gql } from "@apollo/client";

export const LIST_OF_AY_GRADE=gql`
query {
    getAllAyGrade{
        id
        gradeName
        levels{
            name
            photo
            fromAge
            toAge
        }
    }
}
`