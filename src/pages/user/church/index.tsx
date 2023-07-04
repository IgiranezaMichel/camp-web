import { Button, Dialog } from "@mui/material"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { AddChurch } from "./crud/create"
import { useState } from "react"
import { Close } from "@mui/icons-material"
import { DisplayChurch } from "./crud"
import { ChurchContext } from "../../../contexts/churchContext"
import { ContentData } from "../../../types/contentTypes"
import { useGetChurchListByType } from "../../../controller/church/query"
import { ChurchType } from "../../../enum/churchType"

export const Church=()=>{
    const [openAddChurchDialog,setOpenAddChurchDialog]=useState(false);
    const { response, refetch } = useGetChurchListByType(ChurchType.FIELD);
    const data: ContentData = {
        content: response,
        updateContent() {
            refetch();
        },
    }
    return(
        <SideBarNavigation activeBar="/admin/church" items={Url}>
           <ChurchContext.Provider value={data}>
           <div>
                <Button className=""  onClick={()=>setOpenAddChurchDialog(true)} variant="contained">Add New Church</Button>
            </div>
            <DisplayChurch/>
            <Dialog open={openAddChurchDialog} PaperProps={{className:'col-md-6'}}>
                <AddChurch id="">
                    <div>Add New Church <Close className="float-end" onClick={()=>setOpenAddChurchDialog(false)}/></div>
                </AddChurch>
            </Dialog>
           </ChurchContext.Provider>
        </SideBarNavigation>
    )
}