import { ReactNode } from "react"
import { Url } from "../url/url"
import { SideBarNavigation } from "./navigation"

export const Admin=(props:{children:ReactNode})=> {
  return (
    <SideBarNavigation items={Url}>
      <div>
        {props.children}
      </div>
    </SideBarNavigation>
  )
}
