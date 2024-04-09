/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircularProgress, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { useLevel } from "../../../../controller/level/query";
import { LevelContext } from "../../../../contexts/levelContext";
import { CreateLevel } from "./create";
import { ContentData } from "../../../../types/contentTypes";
import { Close, Update} from "@mui/icons-material";
import { useState } from "react";
import { DeleteLevel } from "./delete";
import { ToastContainer } from "react-toastify";
export const DisplayLevels = () => {
  const { response, refetch } = useLevel();
  const data: ContentData = {
    content: response,
    updateContent() {
      refetch();
    },
  }
  const [action,setAction]=useState('');
  const [arrIndex,setArrIndex]=useState(0);
  return (
    <LevelContext.Provider value={data}>
      {!response.responseReady && <div className="text-center p-5 bg-body-secondary">
        <CircularProgress />
      </div>}
      <ImageList className="container-md m-auto border p-1 rounded-0">
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Available  Levels </ListSubheader>
        </ImageListItem>
        {response.responseReady && response.responseContent && response.responseContent.length != 0 && response.responseContent.map((item: any, index: number) => (
          <ImageListItem key={index}>
            <img
              srcSet={item.photo}
              src={item.photo}
              loading="lazy" />
            <ImageListItemBar style={{backgroundColor: 'rgba(0, 0, 0,.8)'}}
              title={item.name}
              subtitle={"Age range " + item.fromAge + ' - ' + item.toAge}
              actionIcon={<div>
                <IconButton className="bg-white rounded-0" 
                data-bs-toggle="modal"
                data-bs-target="#id"
                onClick={()=>{setArrIndex(index);setAction('update')}}
                >
                  <Update/>
                </IconButton>
                <IconButton
                data-bs-toggle="modal"
                data-bs-target="#deleteLevel"
                onClick={()=>{setArrIndex(index);setAction('update')}}
                  className="mx-2 bg-white rounded-0"
                >
                  <Close />
                </IconButton>
              </div>} />
          </ImageListItem>
        ))}
        {response.responseReady && response.responseContent && response.responseContent.length ==0&&
        <ImageListItem key="Subheader" cols={2}>
        <div className="bg-body-tertiary text-center p-5">-- No data found --</div>
      </ImageListItem>
        }
      </ImageList>
      <CreateLevel action={action} arrIndex={arrIndex}/>
      <DeleteLevel action={action} arrIndex={arrIndex}/>
      <ToastContainer />
    </LevelContext.Provider>
  )
}