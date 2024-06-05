import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ResponseType } from "../../types/response";
import { GET_ALL_EXAMS } from "../../graphql/exam/query";

export const useGetExams = () => {
    const [response, setResponse] = useState<ResponseType>({ responseCode: 0, responseContent: [], responseReady: false });
    const { data, refetch } = useQuery(GET_ALL_EXAMS);
    useEffect(
        () => {
            const fetch = async () => {
                if (data)
                    return data.getAllExams;
            }
            fetch().then(data => { setResponse({ responseCode: 200, responseContent: data, responseReady: true }) });
        }, [data]
    )
    return { response, refetch }
}