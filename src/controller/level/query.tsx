import { useEffect, useState } from "react"
import { ResponseType } from "../../types/response"
import { useQuery } from "@apollo/client";
import { DISPLAY_LEVELS } from "../../graphql/level/query";

export const useLevel=()=>{
const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
const {data,refetch}=useQuery(DISPLAY_LEVELS);
useEffect(
()=>{
    const fetch=async()=>{
        if(data) 
            return data.getAllLevels;
    }
    fetch().then(data=>setResponse({responseCode:200,responseContent:data,responseReady:true}));
},[data]
)
return{response,refetch}
}