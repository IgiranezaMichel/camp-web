import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FIND_USER_WORK_AT_THE_SAME_CHURCH } from "../../graphql/duty/query";
import { ResponseType } from "../../types/response";

export const useUserHavingDutyAtTheSameChurch=(churchId:string)=>{
    const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
    const {data,refetch}=useQuery(FIND_USER_WORK_AT_THE_SAME_CHURCH,{variables:{church:churchId}});
    useEffect(
    ()=>{
        const fetch=async()=>{
            if(data) 
                return data.findUserWorkingAtTheSameChurch;
        }
        fetch().then(data=>setResponse({responseCode:200,responseContent:data,responseReady:true}));
    },[data]
    )
    console.log(data)
    return{response,refetch}
    }