import { Folder } from "@mui/icons-material"
import { Admin } from ".."
import { Box, Button } from "@mui/material"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
export const LevelUi = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    return (
        <Admin>
            <div className="card rounded-0">
                <img src="download.jpg" alt="" style={{ filter: 'blur(4px)' }} />
                <div className="card-img-overlay  d-flex justify-content-center align-items-center">
                    <Button variant="contained" className="display-5" data-bs-toggle="modal"
                        data-bs-target="#id"><Folder className="fs-1" /> Add New Level</Button>
                </div>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Available Levels" value="1" />
                            <Tab label="Users" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </Admin>
    )
}