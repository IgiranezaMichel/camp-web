import { gql } from "@apollo/client";

export const UPDATE_ACCOUNT_HOLDER_DUTY=gql`
mutation($duty:DutyInput,$role:Role){
    updateAccountHolderDuty(duty:$duty,role:$role)
}
`