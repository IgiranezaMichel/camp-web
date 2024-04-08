/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ContentData } from "../types/contentTypes";

export const BookContext = createContext<ContentData | undefined>(undefined);
export const useBookContent = () => {
    const book = useContext(BookContext);
    if (book === undefined) throw new Error('No data found to process')
    return book;
}