import { ChurchType } from "../enum/churchType"

export type  ChurchInput={
    id:string
    name:string
    type:ChurchType
    location:string
    churchId:string
  }