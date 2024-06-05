import { useMutation } from "@apollo/client";
import { ExamInput } from "../../types/examInput";
import { CREATE_EXAM, DELETE_EXAM } from "../../graphql/exam/mutation";

export const useSaveOrUpdateExam = (examInput: ExamInput) => {
    const [save] = useMutation(CREATE_EXAM);
    const saveExamHandler= async () => {
        return await save({ variables: { examInput: examInput } })
    }
    return { saveExamHandler}
}

export const useDeleteExam= (id: string) => {
    const [deleteAyGrade] = useMutation(DELETE_EXAM);
    const deleteExamHandler = async () => {
        return await deleteAyGrade({ variables: { id: id } })
    }
    return { deleteExamHandler }
}