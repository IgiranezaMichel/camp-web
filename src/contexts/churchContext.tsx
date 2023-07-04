/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ContentData } from "../types/contentTypes";

export const ChurchContext=createContext<ContentData|undefined>(undefined);
export const useChurchContext=()=>{
    const church=useContext(ChurchContext);
    if(church===undefined)throw new Error('church cant ne null');
    return church;
}