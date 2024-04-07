/* eslint-disable react-hooks/exhaustive-deps */
import { Button, TextField } from "@mui/material"
import { BootstrapModal } from "../../../../component/modal"
import { useEffect, useState } from "react"
import { LevelInput } from "../../../../types/levelInput"
import { useSaveOrUpdateLevel } from "../../../../controller/level/mutation"
import { useLevelContext } from "../../../../contexts/levelContext"
import { toast } from "react-toastify"

export const CreateLevel=(props:{arrIndex:number,action:string})=>{
   const [level,setLevel]=useState<LevelInput>({
      base64Photo:'',
      fromAge:0,
      name:'',
      toAge:0,
      
   })
   const {content,updateContent}=useLevelContext();
   useEffect(
      ()=>{
        const fetch=async()=>{
         if(props.action.length!=0){
            const levelData=content.responseContent[props.arrIndex];
            console.log(levelData)
            setLevel({base64Photo:levelData.photo,fromAge:levelData.fromAge,name:levelData.name,toAge:levelData.toAge,id:levelData.id});
            console.log(level)
         }
         }
         fetch()
      },[props.action.length, props.arrIndex]
   )
   const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = () => {
              setLevel({ ...level, base64Photo: reader.result as string })
          };
          reader.readAsDataURL(file);
      }
  }
   const {saveLevel}=useSaveOrUpdateLevel(level);
   const saveHandler=async()=>{
  await saveLevel().then(
   data=>{
      const result=data.data.saveOrUpdateLevel;
      const splitting=String(result).substring(1,String(result).lastIndexOf(',')).split(',');
      const code=Number(splitting[0].split(' ')[0])
      const responseText=splitting[1];
      code==200?toast.success(responseText):toast.error(responseText);
      updateContent();
  }
  )
   }
    return(
        <>
        <BootstrapModal id="id" size="modal-md" modalTitle={<div>Add New Level / Club</div>}>
         {level.base64Photo.length!=0&&<div className="card col-4 m-auto">
            <img src={level.base64Photo} alt="" />
            </div>}
         <div className="p-3">
            <TextField label='Name' value={level.name} onChange={(e)=>setLevel({...level,name:e.target.value})} className="form-control mb-3" variant="standard"/>
            <TextField label='From Age' value={level.fromAge} onChange={(e)=>setLevel({...level,fromAge:Number(e.target.value)})} className="form-control mb-3" variant="standard"/>
            <TextField label='To Age'  value={level.toAge} onChange={(e)=>setLevel({...level,toAge:Number(e.target.value)})} className="form-control mb-3" variant="standard"/>
            <label htmlFor="">Adventist Youth </label>
            <input type="file" onChange={imgHandler} className="form-control" />
         </div>
         <div className="modal-footer">
            <Button variant="contained" className="fw-bold rounded-0" onClick={()=>saveHandler()}>Save</Button>
         </div>
      </BootstrapModal>
        </>
    )
}