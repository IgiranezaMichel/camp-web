import { useEffect, useState } from "react"
import { ResponseType } from "../../types/response"
import { useQuery } from "@apollo/client";
import { PageInput } from "../../types/pageInput";
import { CAMP_PAGE } from "../../graphql/camp/query";

export const useCamp=(input:PageInput)=>{
const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
const {data,refetch}=useQuery(CAMP_PAGE,{variables:{page:input}});
useEffect(
()=>{
    const fetch=async()=>{
        if(data) 
            return data.campPage;
    }
    fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
},[data]
)
return{response,refetch}
}