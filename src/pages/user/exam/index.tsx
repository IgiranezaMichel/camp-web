import { Box, Button, Tab } from "@mui/material"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"

export const Exam=()=>{
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    return(
        <SideBarNavigation activeBar="/admin/exams" items={Url}>
            <div className="mb-5">
                <Button data-bs-toggle="modal" data-bs-target="#add" variant="contained" className="rounded-0">Add Exam</Button>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            <Tab label="Recent camps" value="1" />
                            <Tab label="Camp Applicants" value="2" />
                            <Tab label="Camp Leader History" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item 1</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </SideBarNavigation>
    )
}