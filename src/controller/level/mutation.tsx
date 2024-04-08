import { useMutation } from "@apollo/client"
import { LevelInput } from "../../types/levelInput"
import { CREATE_LEVELS, DELETE_LEVELS } from "../../graphql/level/mutation"
export const useSaveOrUpdateLevel = (level: LevelInput) => {
    const [save] = useMutation(CREATE_LEVELS);
    const saveLevel = async () => {
        return await save({ variables: { levelInput: level } })
    }
    return { saveLevel }
}
export const useDeleteLevel = (id: string) => {
    const [deleteLevel] = useMutation(DELETE_LEVELS);
    const deleteHandler = async () => {
        return await deleteLevel({ variables: { id: id } })
    }
    return { deleteHandler }
}