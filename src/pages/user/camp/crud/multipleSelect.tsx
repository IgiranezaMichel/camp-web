/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useLevel } from '../../../../controller/level/query';

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
export default function MultipleSelectChip() {
  const [levelId, setLevelId] = React.useState<string[]>([]);
  const [levelList,setLevelList]=React.useState<any>([]);
  const {response}=useLevel();
  React.useEffect(
    ()=>{
      const fetch=async()=>{
        if(response!=undefined&&response.responseReady&&response.responseContent){
          setLevelList(response.responseContent);
        }
      }
      fetch();
    }
  )
  const handleChange = (event: SelectChangeEvent<typeof levelId>) => {
    const {
      target: { value },
    } = event;
    setLevelId(
      typeof value === 'string' ? value.split(',').map(String) : value,
    );
  };
  return (
    <div>
      {response.responseReady&&<FormControl sx={{ m: 1 }} fullWidth>
        <InputLabel id="demo-multiple-chip-label">Select Level of attendance</InputLabel>
        <Select fullWidth
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={levelId}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Select Level of attendance" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((id) => (
                <Chip key={id} label={levelList.find((data:any) => data.id === id)?.name || ''} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {levelList.map((data:any) => (
            <MenuItem
              key={data.id}
              value={data.id}
            >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      }
    </div>
  );
}
