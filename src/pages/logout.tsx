import { SideBarNavigation } from "../component/navigation"
import { Url } from "../url/url"

export const Logout=()=>{
    return (
        <SideBarNavigation  activeBar="/admin/logout" items={Url}>
            <div>
                
            </div>
        </SideBarNavigation>
    )
}