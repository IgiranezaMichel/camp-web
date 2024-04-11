import { useMutation } from "@apollo/client"
import { UPDATE_ACCOUNT_HOLDER_DUTY } from "../../graphql/duty/mutation";
import { Role } from "../../enum/Role";
import { DutyInput } from "../../types/dutyInput";

export const useUpdateAccountHolderDuty=(duty:DutyInput,role:Role)=>{
    const [saveUpdates]=useMutation(UPDATE_ACCOUNT_HOLDER_DUTY);
    const saveUpdateHandler=async()=>{
       return await saveUpdates({variables:{duty:duty,role:role}})
    }
    return {saveUpdateHandler}
}