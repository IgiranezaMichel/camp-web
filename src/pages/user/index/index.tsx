import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"

export const Dashboard=()=>{
    return(
        <SideBarNavigation activeBar="/admin" items={Url}>
            <div>
                
            </div>
        </SideBarNavigation>
    )
}