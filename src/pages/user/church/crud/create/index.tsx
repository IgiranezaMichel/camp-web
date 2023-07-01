import { NativeSelect } from "@mui/material"
import { ReactNode } from "react"

export const AddChurch=(props:{children:ReactNode,id:string})=>{
    return(
        <>
            <div className="p-3">{props.children}</div>
            <div className="p-3">
                Add new 
                <NativeSelect fullWidth className="mb-2">
                    <option value="">Select type of church you want to create</option>
                </NativeSelect>
            </div>
        </>
    )
}