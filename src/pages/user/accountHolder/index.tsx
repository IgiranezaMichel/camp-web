import { Close, PersonAdd } from "@mui/icons-material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Button, Tab } from "@mui/material"
import { useState } from "react"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { CreateAccountHolder } from "./crud/create/create"
import { DisplayAccountHolder } from "./crud/display"

export const User=()=>{
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    const [openAddNewAccountHolder,setOpenNewAccountHolder]=useState(false);
    return (
        <SideBarNavigation activeBar="/admin/user" items={Url}>
            <div>
                <Button variant="contained" onClick={()=>setOpenNewAccountHolder(true)}><PersonAdd/>Add New user</Button>
                <CreateAccountHolder open={openAddNewAccountHolder}>
                    <div>Add new User <Close className="float-end" onClick={()=>setOpenNewAccountHolder(false)}/></div>
                </CreateAccountHolder>
            <div className="mt-4">
            <Box sx={{ width: '100%'}} >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                <Tab label="Christians" value="1" />
                                <Tab label="Leaders" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><DisplayAccountHolder/></TabPanel>
                        <TabPanel value="2">use</TabPanel>
                    </TabContext>
                </Box>
            </div>
            </div>
        </SideBarNavigation>
    )
}