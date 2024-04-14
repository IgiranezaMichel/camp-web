import { Box, Button, Tab } from "@mui/material"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import DisplayExam from "./display/displayExam"
import { CreateExam } from "./crud/create"
import { Close } from "@mui/icons-material"

export const Exam = () => {
    const [value, setValue] = useState('1');
    const [open, setOpen] = useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    return (
        <SideBarNavigation activeBar="/admin/exams" items={Url}>
            <div className="mb-5">
                <Button onClick={() => setOpen(true)} variant="contained" className="rounded-0">Add Exam</Button>
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
                    <TabPanel value="1"><DisplayExam /></TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
            <CreateExam open={open}>
                <div className="p-4 fw-bold sticky-top">Add new exam<Close onClick={() => setOpen(false)} className="float-end" /></div>
            </CreateExam>
        </SideBarNavigation>
    )
}