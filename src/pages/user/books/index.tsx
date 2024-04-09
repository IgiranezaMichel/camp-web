import { Button, FormControl, NativeSelect, Pagination, TextField } from "@mui/material"
import { CreateBook } from "./crud/create"
import { useBook } from "../../../controller/book/query"
import { useState } from "react"
import { PageInput } from "../../../types/pageInput"
import { ContentData } from "../../../types/contentTypes"
import { BookContext } from "../../../contexts/bookContent"
import { ToastContainer } from "react-toastify"
import BookList from "./crud"
import { AddBox, Sort } from "@mui/icons-material"
import { SideBarNavigation } from "../../../component/navigation"
import { Url } from "../../../url/url"

export const BookUi = () => {
    const [page, setPage] = useState<PageInput>({ pageNumber: 0, pageSize: 10, sort: "id" });
    const { response, refetch } = useBook(page);
    const data: ContentData = {
        content: response,
        updateContent() {
            refetch();
        },
    }
    return (
        <BookContext.Provider value={data}>
            <SideBarNavigation activeBar="/admin/book" items={Url}>
                <div>
                    <Button data-bs-toggle="modal"
                        data-bs-target="#addBook" variant="contained"><AddBox /> Add New book</Button>
                </div>
                <div className="mt-4 row container m-auto bg-primary p-1">
                    <div className="col-12 display-6 border-bottom border-3 py-2 text-white mb-4 ">
                        List of books
                    </div>
                <div className="col-4">
                <TextField variant="standard" className=" border-bottom border-3 border-white text-white" placeholder="Search .."/> 
                </div>
                <div className="col-8">
                 <div className="float-end d-flex">
                 <Sort className="fs-1 mx-1 text-white"/><FormControl>
                    <NativeSelect onChange={(e)=>setPage({...page,sort:e.target.value})} className="mx-3 border-bottom border-3 border-white text-white">
                        <option value="">select level to sort</option>
                        <option value="levels" className="text-black">Levels</option>
                        <option value="name" className="text-black">Name</option>
                        <option value="author" className="text-black">author</option>
                        <option value="publicationDate" className="text-black">publicationDate</option>
                        <option value="publisher" className="text-black">publisher</option>
                    </NativeSelect>
                    </FormControl>
                    <span className="text-white">1 page out of 1</span><Pagination className="text-white"/>
                    </div>
                </div>
                </div>
                <div style={{ clear: 'both' }}>
                    <BookList />
                </div>
                <CreateBook />
                <ToastContainer />
            </SideBarNavigation>
        </BookContext.Provider>
    )
}