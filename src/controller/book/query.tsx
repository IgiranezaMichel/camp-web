import { useEffect, useState } from "react"
import { ResponseType } from "../../types/response"
import { useQuery } from "@apollo/client";
import { BOOK_PAGE } from "../../graphql/book/query";
import { PageInput } from "../../types/pageInput";

export const useBook=(input:PageInput)=>{
const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
const {data,refetch}=useQuery(BOOK_PAGE,{variables:{input:input}});
useEffect(
()=>{
    const fetch=async()=>{
        if(data) 
            return data.bookPage;
    }
    fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
},[data]
)
return{response,refetch}
}