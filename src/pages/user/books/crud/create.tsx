/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, NativeSelect, TextField } from "@mui/material"
import { BootstrapModal } from "../../../../component/modal"
import { useLevel } from "../../../../controller/level/query"
import { Link } from "react-router-dom";
import { useState } from "react";
import { BookInput } from "../../../../types/bookInput";
import { useSaveOrUpdateBook } from "../../../../controller/book/mutation";
import { Close, Save } from "@mui/icons-material";
import { toast } from "react-toastify";

export const CreateBook = () => {
    const { response } = useLevel();
    const [book, setBook] = useState<BookInput>({ author: '', base64Cover: '', base64File: '', id: '', levelId: '', name: '', publicationDate: '', publisher: '', serialNumber: '' });
    const { saveBook } = useSaveOrUpdateBook(book);
    const saveBookHandler = () => {
        saveBook().then(data => {
            const result = data.data.saveOrUpdateLevel;
            const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
            const code = Number(splitting[0].split(' ')[0])
            const responseText = splitting[1];
            code == 200 ? toast.success(responseText) : toast.error(responseText);
            // updateContent();
        });
    }
    const coverHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setBook({ ...book, base64Cover: reader.result as string })
            };
            reader.readAsDataURL(file);
        }
    }
    const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setBook({ ...book, base64File: reader.result as string })
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <BootstrapModal id="addBook" modalTitle={<div>
            Add new Book
        </div>} size="modal-md">
            <div className="card">
                {book.base64Cover.length != 0 && <div>
                    <img src={book.base64Cover} className="card-img" />
                </div>}
            </div>
            {response.responseReady && response.responseContent && response.responseContent && response.responseContent.length != 0 && <div className="row p-1">
                <div className="col-md-6">
                    <TextField value={book.name} onChange={(e) => setBook({ ...book, name: e.target.value })} className="form-control mb-3" variant="standard" label='Name' />
                    <TextField value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} className="form-control mb-2" variant="standard" label='Author' />
                    <TextField value={book.publisher} onChange={(e) => setBook({ ...book, publisher: e.target.value })} className="form-control mb-4 mt-2" variant="standard" label='Publisher' />
                    <label htmlFor="">Publication Date</label>
                    <TextField type="date" value={book.publicationDate} onChange={(e) => setBook({ ...book, publicationDate: e.target.value })} className="form-control mb-4 mt-2" variant="standard" />
                </div>
                <div className="col-md-6">
                    <TextField value={book.serialNumber} onChange={(e) => setBook({ ...book, serialNumber: e.target.value })} className="form-control mb-2" variant="standard" label='Serial Number' />
                    <FormControl fullWidth className="mb-2">
                        <b>Book cover</b>
                        <TextField type="file" onChange={coverHandler} className="form-control" variant="standard" />
                    </FormControl>
                    <FormControl fullWidth className="mb-3">
                        <b >Book</b>
                        <TextField type="file" onChange={fileHandler} className="form-control" variant="standard" />
                    </FormControl>
                    <FormControl fullWidth className="mb-2">
                        <b className="mb-3">Ay Level for the book</b>
                        <NativeSelect onChange={(e) => setBook({ ...book, levelId: e.target.value })}>
                            <option value="">Select Ay Level for this book</option>
                            {response.responseContent && response.responseContent && response.responseContent.length != 0 && response.responseContent.map((data: any, index: number) => {
                                return <option key={index} value={data.id}>{data.name}</option>
                            })}
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="modal-footer">
                    <Button variant="contained" data-bs-dismiss='modal' className="mx-2 bg-danger fw-bold text-white"><Close /></Button><Button variant="contained" onClick={() => saveBookHandler()}><Save /></Button>
                </div>
            </div>}
            {
                response.responseReady && response.responseContent && response.responseContent && response.responseContent.length == 0 && <div>
                    <span>Please add Adventist youth before adding any book?</span>
                    <Link data-dismiss="modal" to={'/admin/level'}><Button variant="contained">Add New ay</Button></Link>
                </div>
            }
        </BootstrapModal>
    )
}