import { Button } from "@mui/material"
import { Admin } from "../../../component/admin"
import { AddBox } from "@material-ui/icons"
import { CreateBook } from "./crud/create"

export const BookUi=()=>{
    return(
        <Admin>
            <div>
                <Button data-bs-toggle="modal"
                data-bs-target="#addBook" variant="contained"><AddBox/> Add New book</Button>
            </div>
            <CreateBook/>
        </Admin>
    )
}