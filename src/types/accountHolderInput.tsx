import { Role } from "../enum/Role"

export type AccountHolderInput={
    id:string
    name:string
    gender:string
    dob:string
    phoneNumber:string
    email:string
    base64Profile:string
    password:string
    role?:Role
  }