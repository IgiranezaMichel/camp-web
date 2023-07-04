import { Card, CircularProgress } from "@mui/material";
import { useChurchContext } from "../../../../contexts/churchContext"

export const DisplayChurch=()=>{
    const{content}=useChurchContext();
    console.log(content)
    return(
        <>
        {!content.responseReady&&<div className="text-center p-5"><CircularProgress/></div>}
        {content&&content.responseReady&&content.responseContent&&content.responseContent!=undefined&&content.responseContent.length!=0&&
        content.responseContent.map((data,index:number)=>{
            return <Card className="mt-3 p-1 rounded-0 border border-black">
                <h3>{data.name}</h3>
                <div>{data.location}</div>
            </Card>
        })
        }
        </>
    )
}