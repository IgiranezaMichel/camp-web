import { Box, Button, Dialog, Slide, Tab } from "@mui/material"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { CreateCamp } from "./crud/create"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import { Close } from "@mui/icons-material"
import { PageInput } from "../../../types/pageInput"
import { ContentData } from "../../../types/contentTypes"
import { useActiveCamp, useCamp } from "../../../controller/camp/query"
import { CampContext } from "../../../contexts/campContext"
import { DisplayCamp } from "./crud"

export const Camp = () => {
    const [value, setValue] = useState('1');
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [page, setPage] = useState<PageInput>({ pageNumber: 0, pageSize: 10, sort: "timeStamp" });
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    const camp=useActiveCamp(page);
    console.log(camp)
    const { response, refetch } = useCamp(page);
    const data: ContentData = {
        content: response,
        updateContent() {
            refetch();
        },
    }
    return (
        <CampContext.Provider value={data}>
            <SideBarNavigation activeBar="/admin/camp" items={Url}>
                <div className="mb-5">
                    <Button onClick={() => setOpenCreateDialog(true)} data-bs-toggle="modal" data-bs-target="#add" variant="contained" className="rounded-0">Add new camp</Button>
                </div>
                <Box sx={{ width: '100%' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                <Tab label="Recent camps" value="1" />
                                <Tab label="Camp Applicants" value="2" />
                                <Tab label="Camp Leader History" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><DisplayCamp/></TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
                <Dialog TransitionComponent={Slide} open={openCreateDialog}>
                    <CreateCamp>
                        <div className="p-4 sticky-top bg-white" >Add New camp <Close className="float-end" onClick={() => setOpenCreateDialog(false)} /></div>
                    </CreateCamp>
                </Dialog>
            </SideBarNavigation>
        </CampContext.Provider>
    )
}