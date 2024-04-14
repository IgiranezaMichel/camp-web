import { useState } from "react";
import { CreateExam } from "../crud/create";
export default function DisplayExam() {
    const [open,setOpen]=useState(false);
  return (
   <>
   Mike
   <CreateExam open={open}>
    <div></div>
   </CreateExam>
   </>
  )
}
