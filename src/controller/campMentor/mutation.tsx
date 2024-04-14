import { useMutation } from "@apollo/client";
import { CREATE_OR_UPDATE_CAMP_MENTOR } from "../../graphql/campMentor/mutation";
import { CampMentorInput } from "../../types/campMentorInput";

export const useCreateCampMentor=(campMentor:CampMentorInput)=>{
    const [save] = useMutation(CREATE_OR_UPDATE_CAMP_MENTOR);
    const saveCampMentor = async () => {
        return await save({ variables: { input: campMentor } })
    }
    return { saveCampMentor }
}