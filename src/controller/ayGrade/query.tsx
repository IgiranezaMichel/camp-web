import { useEffect, useState } from "react";
import { ResponseType } from "../../types/response";
import { LIST_OF_AY_GRADE } from "../../graphql/ayGrade/query";
import { useQuery } from "@apollo/client";
export const useGetAyGrade = () => {
    const [response, setResponse] = useState<ResponseType>({ responseCode: 0, responseContent: [], responseReady: false });
    const { data, refetch } = useQuery(LIST_OF_AY_GRADE);
    useEffect(
        () => {
            const fetch = async () => {
                if (data)
                    return data.getAllAyGrade;
            }
            fetch().then(data => { setResponse({ responseCode: 200, responseContent: data, responseReady: true }) });
        }, [data]
    )
    return { response, refetch }
}