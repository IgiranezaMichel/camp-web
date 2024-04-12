import { Close, PersonAdd } from "@mui/icons-material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Button, Tab } from "@mui/material"
import { useState } from "react"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"
import { CreateAccountHolder } from "./crud/create/create"
import { DisplayAccountHolder } from "./crud/display"
import { useFindingAccountHolderHavingSameRole } from "../../../controller/duty/query"
import { Role } from "../../../enum/Role"
import { DisplayFieldAccountHolder } from "./crud/display/fieldAccountHolder"
import { PageInput } from "../../../types/pageInput"

export const User=()=>{
    const [page,setPage]=useState<PageInput>({pageNumber:0,pageSize:10,sort:"id"});
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event;
        setValue(newValue);
    };
    const {refetch}=useFindingAccountHolderHavingSameRole(page,Role.CHRISTIAN);
    const [openAddNewAccountHolder,setOpenNewAccountHolder]=useState(false);
    return (
        <SideBarNavigation activeBar="/admin/user" items={Url}>
            <div>
                <Button variant="contained" onClick={()=>setOpenNewAccountHolder(true)}><PersonAdd/>Add New user</Button>
                <CreateAccountHolder open={openAddNewAccountHolder}>
                    <div>Add new User <Close className="float-end" onClick={()=>{setOpenNewAccountHolder(false);refetch()}}/></div>
                </CreateAccountHolder>
            <div className="mt-4">
            <Box sx={{ width: '100%'}} >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                <Tab label="Christians" value="1" />
                                <Tab label="leader" value="2" />
                                <Tab label="field" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><DisplayAccountHolder/></TabPanel>
                        <TabPanel value="2"></TabPanel>
                        <TabPanel value="3"><DisplayFieldAccountHolder/></TabPanel>
                    </TabContext>
                </Box>
            </div>
            </div>
        </SideBarNavigation>
    )
}