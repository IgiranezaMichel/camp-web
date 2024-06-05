import { Button, Paper } from "@mui/material";
import { SideBarNavigation } from "../component/navigation"
import { Url } from "../url/url"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/loginContext";

export const Logout=()=>{
    const login=useContext(LoginContext);
    const navigation=useNavigate();
  useEffect(
    ()=>{
        if(login?.currentState===undefined){
            navigation("/login",{state:{err:'Please login before accessing this page'}})
        }
    }
  )
    const logoutHandler=()=>{
        login?.updateState(undefined);
        navigation("/login",{state:{
            logout:"logout successful"
        }});
    }
    return (
        <SideBarNavigation  activeBar="/admin/logout" items={Url}>
            <div>
                <Paper elevation={0} sx={{height:'80dvh',border:'none'}} className="d-flex justify-content-center align-items-center" >
                <section>
                are you sure you want to logout?
                <div className="modal-footer mt-3"><Button onClick={()=>logoutHandler()}>logout</Button></div>
                </section>
            </Paper>
            </div>
        </SideBarNavigation>
    )
}