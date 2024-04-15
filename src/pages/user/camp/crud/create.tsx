/* eslint-disable @typescript-eslint/no-explicit-any */
import JoditEditor from "jodit-react"
import React, { ReactNode, useState } from "react"
import { Avatar, Box, Chip, CircularProgress, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, TextareaAutosize } from "@mui/material";
import { useLevel } from "../../../../controller/level/query";
import { Save } from "@mui/icons-material";
import { CampInput } from "../../../../types/campInput";
import { ToastContainer, toast } from "react-toastify";
import { useSaveOrUpdateCamp } from "../../../../controller/camp/mutation";
import { useCampContext } from "../../../../contexts/campContext";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
export const CreateCamp = (props: { children: ReactNode }) => {
    const [camp,setCamp]=useState<CampInput>({
        address:'',
        content:'',
        cost:0,
        description:'',
        endingDate:'',
        location:'',
        levelArr:[],
        startingDate:'',
        title:''
    })
    const [levelList, setLevelList] = React.useState<any>([]);
    const { response} = useLevel();
    const {saveCamp}=useSaveOrUpdateCamp(camp);
    const {updateContent}=useCampContext();
    React.useEffect(
        () => {
            const fetch = async () => {
                if (response != undefined && response.responseReady && response.responseContent) {
                    setLevelList(response.responseContent);
                }
            }
            fetch();
        },[levelList, response]
    )
    const handleChange = (event: SelectChangeEvent<typeof camp.levelArr>) => {
        const {
            target: { value },
        } = event;
        setCamp(
            {...camp,levelArr:typeof value === 'string' ? value.split(',').map(String) : value,}
        );
        console.log(camp.levelArr)
    };
    const saveCampHandler=()=>{
        saveCamp().then(data=>{
            const result = data.data.saveOrUpdateCamp;
            const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
            const code = Number(splitting[0].split(' ')[0])
            const responseText = splitting[1];
            code == 200 ? toast.success(responseText) : toast.error(responseText);
            updateContent();
        })
    }
    return (
        <>
        {!response.responseReady&&<div className="text-center p-2">
            <CircularProgress/>
            </div>}
            {response != undefined && response.responseReady && response.responseContent&&levelList!=undefined&&levelList.length!=0&&<>
            {props.children}
            <div className="row col-12 m-auto pb-5">
                <div className="col-sm-6">
                    <TextField value={camp.title} onChange={(e)=>setCamp({...camp,title:e.target.value})} label='Title' variant="standard" className="col-12 mb-3" />
                    <TextField value={camp.address} onChange={(e)=>setCamp({...camp,address:e.target.value})} label='Address' variant="standard" className="col-12 mb-3" />
                    <label htmlFor="">Starting Date</label>
                    <TextField type="date" value={camp.startingDate} onChange={(e)=>setCamp({...camp,startingDate:e.target.value})} variant="standard" className="col-12 mb-3" />
                </div>
                <div className="col-sm-6">
                    <TextField label='Cost' value={camp.cost} onChange={(e)=>setCamp({...camp,cost:Number(e.target.value)})} variant="standard" className="col-12 mb-3" />
                    <TextField value={camp.location} onChange={(e)=>setCamp({...camp,location:e.target.value})} label='Location' variant="standard" className="col-12 mb-3" />
                    <label htmlFor="Ending Date">Ending Date</label>
                    <TextField value={camp.endingDate} onChange={(e)=>setCamp({...camp,endingDate:e.target.value})} type="date" variant="standard" className="col-12 mb-3" />
                </div>
                <div className="col-12 mb-2">
                <TextareaAutosize value={camp.description} onChange={(e)=>setCamp({...camp,description:e.target.value})} placeholder="Add simple description for a title ..." minRows={4} className="col-12"/>
                </div>
                <div className="col-12">
                {response.responseReady && <FormControl fullWidth className="mb-2">
                    <InputLabel id="demo-multiple-chip-label">Select Level of attendance</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={camp.levelArr}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Select Level of attendance" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((id:any) => (
                                    <Chip
                                        avatar={<Avatar src={levelList.find((data: any) => data.id === id)?.photo || ''} />}
                                        key={id} label={levelList.find((data: any) => data.id === id)?.name || ''} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {levelList.map((data: any) => (
                            <MenuItem
                                key={data.id}
                                value={data.id}
                            >
                                <Avatar src={data.photo} /> {data.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                }
                </div>
                <JoditEditor className="col-12 border border-1 border-black rounded-0"
                    value={camp.content} onChange={(e)=>setCamp({...camp,content:e})}/>
            </div>
            <div className="modal-footer">
                <button onClick={()=>saveCampHandler()} className="" ><Save/></button>
            </div>
            </>}
            {response != undefined && response.responseReady && response.responseContent&&levelList!=undefined&&levelList.length==0&&<div>
                <div>{props.children}</div>
                <div className="p-3">
                Please Add Ay Level before creating any camp meeting
                </div>
                </div>}
            <ToastContainer/>
        </>
    )
}