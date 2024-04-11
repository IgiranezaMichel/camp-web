import { gql } from "@apollo/client";

export const FIND_ACCOUNT_HOLDER_BY_EMAIL=gql`
query($email:ID!){
    findByEmail(email:$email){
        
    }
}
`