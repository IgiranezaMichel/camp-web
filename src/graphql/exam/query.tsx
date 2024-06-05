import { gql } from "@apollo/client";

export const GET_ALL_EXAMS=gql`
query{
    getAllExams{
        id
        name
        description
        instruction
        ayGrade{
            gradeName
            levels{
                name
                photo
                fromAge
                toAge
            }
        }
    }
}
`