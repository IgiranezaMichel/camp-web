import { ReactNode } from "react";
// import { useLoginContext } from "../../contexts/loginContext";
// import { useNavigate } from "react-router-dom";

export const Authentication=(props:{children:ReactNode})=>{
// const {login}=useLoginContext();
// const navigation=useNavigate();
// useEffect(
//     ()=>{
//         if(login===undefined||login.currentState===undefined){
//             navigation("/login",{state:{err:'Please login is required'}});
//         }
//     }
// )
return(
    <>
    {props.children}
    </>
)
}