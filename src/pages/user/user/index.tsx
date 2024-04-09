import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"

export const User=()=>{
    return (
        <SideBarNavigation activeBar="/admin/user" items={Url}>
            <div>
                
            </div>
        </SideBarNavigation>
    )
}