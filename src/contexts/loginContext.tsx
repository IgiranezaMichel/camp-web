/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { DataState } from "../types/DataState";

export const LoginContext=createContext<DataState|undefined>(undefined);
export const useLoginContext=()=>{
    const login=useContext(LoginContext);
    return {login};
}