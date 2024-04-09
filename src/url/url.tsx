import { AppRegistration, Book, Dashboard, Home, Logout, People, Stairs } from "@mui/icons-material";
import { NavigationItem } from "../types/navigationItem";

export const Url:NavigationItem[]=[
    {icon:<Dashboard/>,title:'Home',url:'/admin'},
    {icon:<Stairs/>,title:'Levels',url:'/admin/level'},
    {icon:<Book/>,title:'Books',url:'/admin/book'},
    {icon:<Home/>,title:'Camps',url:'/admin/camp'},
    {icon:<AppRegistration/>,title:'Exams',url:'/admin/exams'},
    {icon:<People/>,title:'Users',url:'/admin/user'},
    {icon:<Logout/>,title:'Logout',url:'/admin/logout'},
  ]