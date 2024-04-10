import { useMutation } from "@apollo/client";
import { CampInput } from "../../types/campInput";
import { CREATE_CAMP, DELETE_CAMP } from "../../graphql/camp/mutation";

export const useSaveOrUpdateCamp = (campInput: CampInput) => {
    console.log(campInput)
    const [save] = useMutation(CREATE_CAMP);
    const saveCamp = async () => {
        return await save({ variables: { campInput: campInput } })
    }
    return { saveCamp }
}
export const useDeleteCamp = (id: string) => {
    const [deleteCamp] = useMutation(DELETE_CAMP);
    const deleteHandler = async () => {
        return await deleteCamp({ variables: { id: id } })
    }
    return { deleteHandler }
}
