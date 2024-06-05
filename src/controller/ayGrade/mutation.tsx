import { useMutation } from "@apollo/client";
import { CREATE_AY_GRADE, DELETE_AY_GRADE } from "../../graphql/ayGrade/mutation";
import { AyGradeInput } from "../../types/ayGradeInput";

export const useSaveOrUpdateAyGrade = (ayGradeInput: AyGradeInput) => {
    const [save] = useMutation(CREATE_AY_GRADE);
    const saveAyGrade = async () => {
        return await save({ variables: { ayGrade: ayGradeInput } })
    }
    return { saveAyGrade }
}
export const useDeleteAyGrade = (ayGradeId: string) => {
    const [deleteAyGrade] = useMutation(DELETE_AY_GRADE);
    const deleteAyGradeHandler = async () => {
        return await deleteAyGrade({ variables: { ayGradeId: ayGradeId } })
    }
    return { deleteAyGradeHandler }
}