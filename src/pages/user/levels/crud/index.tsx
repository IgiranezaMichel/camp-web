import {IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { Close } from "@material-ui/icons";
export const DisplayLevels=()=>{
    return (
       <ImageList className="container-md m-auto border p-1 rounded-0">
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Available  Levels </ListSubheader>
        </ImageListItem>
        {files.map((item:any,index:number) => (
          <ImageListItem key={index}>
            <img
              srcSet={item}
              src={item.base64Data}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.fileName}
              subtitle={item.fileExtension}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={()=>{delete files[index]}}
                >
                    <Close/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        </ImageList>
    )
}