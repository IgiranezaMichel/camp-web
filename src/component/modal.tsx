import { Box, Typography } from "@mui/material"
import { FC, ReactNode } from "react"
type modalItem={
    bg?:string,
    id:string,
    size:'modal-sm'|'modal-md'|'modal-lg'|'modal-fullscreen',
    modalTitle?:ReactNode,
    children:ReactNode
}
export const BootstrapModal:FC<modalItem>=(props)=>{
    return(
        <>
        <Typography
            className="modal fade"
            id={props.id}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="false"
        >
            <Box
                className={"modal-dialog modal-dialog-scrollable modal-dialog-centered "+props.size}
                role="document">
                <div className={"modal-content rounded-0 "+props.bg}>
                    <div className="modal-header border-0">
                            {props.modalTitle} 
                        <button type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </Box>
        </Typography>
        </>
    )
}