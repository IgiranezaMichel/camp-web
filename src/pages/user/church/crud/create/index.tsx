import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { ReactNode, useState } from "react"
import { Field } from "./field";
import { District } from "./district";
import { ChurchZone } from "./church";

export const AddChurch=(props:{children:ReactNode,id:string})=>{
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    return(
        <>
            <div className="p-3">{props.children}</div>
            <div className="p-3">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            <Tab label="Field" value="1" />
                            <Tab label="District" value="2" />
                            <Tab label="Church" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Field/></TabPanel>
                    <TabPanel value="2"><District/></TabPanel>
                    <TabPanel value="3"><ChurchZone/></TabPanel>
                </TabContext>
            </Box>
            </div>
        </>
    )
}