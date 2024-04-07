/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ContentData } from "../types/contentTypes";

export const LevelContext=createContext<ContentData|undefined>(undefined);
export const useLevelContext=()=>{
    const level=useContext(LevelContext);
    if(level===undefined)throw new Error('level cant ne null');
    return level;
}