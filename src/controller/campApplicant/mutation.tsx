import { useMutation } from "@apollo/client";
import { CampApplicantInput } from "../../types/campApplicationInput"
import { CREATE_CAMP_APPLICATION, UPDATE_CAMP_APPLICANT_STATUS } from "../../graphql/campApplicant/mutation";
import { CampApplicantStatus } from "../../enum/campApplicationStatus";

export const useCampApplication=(campApplicantInput:CampApplicantInput)=>{
    const [save] = useMutation(CREATE_CAMP_APPLICATION);
    const saveCampApplication = async () => {
        return await save({ variables: { campApplicantInput: campApplicantInput } })
    }
    return { saveCampApplication }
}
export const useUpdateCampApplicantStatus=(campApplicantId:string,status:CampApplicantStatus,comment:string)=>{
    const [save] = useMutation(UPDATE_CAMP_APPLICANT_STATUS);
    const updateCampApplicationStatus = async () => {
        return await save({ variables: { campApplicantId:campApplicantId,status:status,comment:comment } })
    }
    return { updateCampApplicationStatus }
}
