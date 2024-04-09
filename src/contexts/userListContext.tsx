/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ContentData } from "../types/contentTypes";

export const UserListContext=createContext<ContentData|undefined>(undefined);
export const useUserListContext=()=>{
    const userList=useContext(UserListContext);
    if(userList===undefined)throw new Error('UserList cant be null');
    return userList;
}