import { Book, Dashboard, FileOpenSharp, LocationOn, People, Stairs } from "@mui/icons-material";
import { NavigationItem } from "../types/navigationItem";

export const Url:NavigationItem[]=[
    {icon:<Dashboard/>,title:'Home',url:'/admin'},
    {icon:<Stairs/>,title:'Levels',url:'/admin/level'},
    {icon:<Book/>,title:'Books',url:'/admin/book'},
    {icon:<FileOpenSharp/>,title:'Exams',url:'/admin/exams'},
    {icon:<LocationOn/>,title:'Camps',url:'/admin/camps'},
    {icon:<People/>,title:'Camp Leaders',url:'/admin/leader'},
  ]