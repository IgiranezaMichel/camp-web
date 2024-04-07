import { ReactNode } from "react"
import { SideBarNavigation } from "../../component/navigation"
import { Url } from "../../url/url"
import { CreateLevel } from "./levels/crud/create"

export const Admin=(props:{children:ReactNode})=> {
  return (
    <SideBarNavigation items={Url}>
        <CreateLevel/>
      <div>
        {props.children}
      </div>
    </SideBarNavigation>
  )
}
