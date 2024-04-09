/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ContentData } from "../types/contentTypes";

export const ExamContext=createContext<ContentData|undefined>(undefined);
export const useExamContext=()=>{
    const exam=useContext(ExamContext);
    if(exam===undefined)throw new Error('Exam cant ne null');
    return exam;
}