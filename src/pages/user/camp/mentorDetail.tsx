import { Email, Person } from "@mui/icons-material"
import { Dialog } from "@mui/material"
import { ReactNode } from "react"

export const MentorDetail=(props:{data:{photo:string,name:string,email:string,open:boolean},children:ReactNode})=>{
    return <>
    <Dialog open={props.data.open}>
        <div className="card border-0">
            <div className="sticky-top">
            {props.children}
            </div>
            <img src={props.data.photo} alt="" />
            <section className="mb-4">
                <div><Person/> {props.data.name}</div>
                <div><Email/> {props.data.email}</div>
            </section>
        </div>
    </Dialog>
    </>
}