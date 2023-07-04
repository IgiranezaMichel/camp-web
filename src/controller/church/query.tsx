import { useEffect, useState } from "react";
import { ChurchType } from "../../enum/churchType"
import { ResponseType } from "../../types/response";
import { CHURCH_FIELD, FIND_CHURCHES_BY_TYPE } from "../../graphql/church/query";
import { useQuery } from "@apollo/client";

export const useGetChurchListByType=(input:ChurchType)=>{
    const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
    const {data,refetch}=useQuery(FIND_CHURCHES_BY_TYPE,{variables:{input:input}});
    useEffect(
    ()=>{
        const fetch=async()=>{
            if(data) 
                return data.findAllByChurchType;
        }
        fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
    },[data]
    )
    return{response,refetch}
}
export const useGetField=(input:ChurchType)=>{
    const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
    const {data,refetch}=useQuery(CHURCH_FIELD,{variables:{input:input}});
    useEffect(
    ()=>{
        const fetch=async()=>{
            if(data) 
                return data.findAllByChurchType;
        }
        fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
    },[data]
    )
    return{response,refetch}
}