import { useMutation } from "@apollo/client";
import { CampApplicantInput } from "../../types/campApplicationInput"
import { CREATE_CAMP_APPLICATION } from "../../graphql/campApplicant/mutation";

export const useCampApplication=(campApplicantInput:CampApplicantInput)=>{
    const [save] = useMutation(CREATE_CAMP_APPLICATION);
    const saveCampApplication = async () => {
        return await save({ variables: { campApplicantInput: campApplicantInput } })
    }
    return { saveCampApplication }
}