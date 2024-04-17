import { useEffect, useState } from "react";
import { ResponseType } from "../../types/response";
import { CAMP_APPLICANT_PAGE } from "../../graphql/campApplicant/query";
import { useQuery } from "@apollo/client";
import { PageInput } from "../../types/pageInput";
export const useCampApplicationPage=(input:PageInput,campId:string)=>{
const [response,setResponse]=useState<ResponseType>({responseCode:0,responseContent:[],responseReady:false});
const {data,refetch}=useQuery(CAMP_APPLICANT_PAGE,{variables:{input:input,campId:campId}});
useEffect(
()=>{
    const fetch=async()=>{
        if(data) 
            return data.campApplicantPage;
    }
    fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
},[data]
)
return{response,refetch}
}