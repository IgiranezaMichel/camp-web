/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ContentData } from "../types/contentTypes";

export const CampContext=createContext<ContentData|undefined>(undefined);
export const useCampContext=()=>{
    const level=useContext(CampContext);
    if(level===undefined)throw new Error('level cant ne null');
    return level;
}