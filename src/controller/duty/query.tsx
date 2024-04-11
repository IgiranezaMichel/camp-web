import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FINDING_ACCOUNT_HOLDER_HAVING_SAME_ROLE, FIND_USER_WORK_AT_THE_SAME_CHURCH } from "../../graphql/duty/query";
import { ResponseType } from "../../types/response";
import { PageInput } from "../../types/pageInput";
import { Role } from "../../enum/Role";

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
    return{response,refetch}
    }
    export const useFindingAccountHolderHavingSameRole=(input:PageInput,role:Role)=>{
        console.log(input)
        console.log(role)
        const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
        const {data,refetch}=useQuery(FINDING_ACCOUNT_HOLDER_HAVING_SAME_ROLE,{variables:{input:input,role:role}});
        useEffect(
        ()=>{
            const fetch=async()=>{
                if(data) 
                    return data.findAccountHolderHavingSameRole;
            }
            fetch().then(data=>setResponse({responseCode:200,responseContent:data,responseReady:true}));
        },[data]
        )
        return{response,refetch}
        }