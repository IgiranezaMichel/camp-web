import { useMutation } from "@apollo/client";
import { CREATE_CHURCH, DELETE_CHURCH } from "../../graphql/church/mutation";
import { ChurchInput } from "../../types/chuchInput";

export const useSaveOrUpdateChurch = (churchInput: ChurchInput) => {
    const [save] = useMutation(CREATE_CHURCH);
    const saveChurch = async () => {
        return await save({ variables: { churchInput: churchInput } })
    }
    return { saveChurch }
}
export const useDeleteChurch= (id: string) => {
    const [deleteChurch] = useMutation(DELETE_CHURCH);
    const deleteHandler = async () => {
        return await deleteChurch({ variables: { id: id } })
    }
    return { deleteHandler }
}
