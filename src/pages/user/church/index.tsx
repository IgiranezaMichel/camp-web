import { Box, Button, Dialog, Tab } from "@mui/material"
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
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { DisplayDistrict } from "./crud/display/district"

export const Church=()=>{
    const [openAddChurchDialog,setOpenAddChurchDialog]=useState(false);
    const { response, refetch } = useGetChurchListByType(ChurchType.FIELD);
    const data: ContentData = {
        content: response,
        updateContent() {
            refetch();
        },
    }
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    return(
        <SideBarNavigation activeBar="/admin/church" items={Url}>
           <ChurchContext.Provider value={data}>
           <div>
                <Button className=""  onClick={()=>setOpenAddChurchDialog(true)} variant="contained">Add New Church</Button>
            </div>
            <div className="mt-5">
            <Box sx={{ width: '100%'}} >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                <Tab label="Field" value="1" />
                                <Tab label="District" value="2" />
                                <Tab label="Church" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><DisplayChurch/></TabPanel>
                        <TabPanel value="2"><DisplayDistrict/></TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </div>
            
            <Dialog open={openAddChurchDialog} PaperProps={{className:'col-md-6'}}>
                <AddChurch id="">
                    <div>Add New Church <Close className="float-end" onClick={()=>setOpenAddChurchDialog(false)}/></div>
                </AddChurch>
            </Dialog>
           </ChurchContext.Provider>
        </SideBarNavigation>
    )
}