import { Button, Dialog } from "@mui/material"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { AddChurch } from "./crud/create"
import { useState } from "react"
import { Close } from "@mui/icons-material"

export const Church=()=>{
    const [openAddChurchDialog,setOpenAddChurchDialog]=useState(false);
    return(
        <SideBarNavigation activeBar="/admin/church" items={Url}>
            <div>
                <Button className=""  onClick={()=>setOpenAddChurchDialog(true)} variant="contained">Add New Church</Button>
            </div>
            <Dialog open={openAddChurchDialog} PaperProps={{className:'col-md-6'}}>
                <AddChurch id="">
                    <div>Add New Church <Close className="float-end" onClick={()=>setOpenAddChurchDialog(false)}/></div>
                </AddChurch>
            </Dialog>
        </SideBarNavigation>
    )
}