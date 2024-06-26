import { useEffect, useState } from "react"
import { ResponseType } from "../../types/response"
import { useQuery } from "@apollo/client";
import { PageInput } from "../../types/pageInput";
import { ACTIVE_CAMP, CAMP_PAGE, INACTIVE_CAMP } from "../../graphql/camp/query";

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
export const useActiveCamp = (page: PageInput) => {
    const [response, setResponse] = useState<ResponseType>({
      responseContent: [],
      responseReady: false,
      responseCode:0
    });
    const {data,refetch}=useQuery(ACTIVE_CAMP,{variables:{page:page}});
    useEffect(
    ()=>{
        const fetch=async()=>{
            if(data) 
                return data.activeCamp;
        }
        fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
    },[data]
    )
    return{response,refetch}
  };
  export const useInactiveCamp = (page: PageInput) => {
    const [response, setResponse] = useState<ResponseType>({
      responseContent: [],
      responseReady: false,
      responseCode:0
    });
    const {data,refetch}=useQuery(INACTIVE_CAMP,{variables:{page:page}});
    useEffect(
    ()=>{
        const fetch=async()=>{
            if(data) 
                return data.inactiveCamp;
        }
        fetch().then(data=>{setResponse({responseCode:200,responseContent:data,responseReady:true})});
    },[data]
    )
    return{response,refetch}
  };