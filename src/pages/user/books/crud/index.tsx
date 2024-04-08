/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { useBookContent } from '../../../../contexts/bookContent';
import { CircularProgress, ListSubheader } from '@mui/material';
import { Close, VisibilityOutlined } from '@mui/icons-material';
import { BookDetail } from './detail';
import { useState } from 'react';
import { DeleteBook } from './delete';
import { ToastContainer } from 'react-toastify';

export default function BookList() {
    const { content } = useBookContent();
    const [arrIndex, setArrIndex] = useState(0);
    return (
        <>
            {!content.responseReady && <div className='text-center'>
                <CircularProgress />
            </div>}
            <ImageList className='col-md-8 m-auto'>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">List of books</ListSubheader>
                </ImageListItem>
                {content.responseReady && content.responseContent && content.responseContent.content && content.responseContent.content.length != 0 &&
                    content.responseContent.content.map((data: any, index: number) => {
                        return <>
                            <ImageListItem key={index}>
                                <img
                                    srcSet={data.cover}
                                    src={data.cover}
                                    alt={data.name}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={data.name}
                                    subtitle={<div>
                                        <div><b>Author </b>{data.author}</div>
                                        <div ><b>Ay Level </b>{data.levels.name}</div>
                                    </div>}
                                    actionIcon={
                                        <div>
                                            <IconButton onClick={() => setArrIndex(index)}
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={data.name}
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteBook"
                                            >
                                                <Close />
                                            </IconButton>
                                            <IconButton onClick={() => setArrIndex(index)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#detail"
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={data.name}
                                            >
                                                <VisibilityOutlined />
                                            </IconButton>
                                        </div>
                                    }
                                />
                            </ImageListItem>
                        </>
                    })}
            </ImageList>
            {content.responseReady && content.responseContent && content.responseContent.content && content.responseContent.content.length != 0 && <>
                <BookDetail arrIndex={arrIndex} />
                <DeleteBook arrIndex={arrIndex} />
            </>}
            {content.responseReady && content.responseContent && content.responseContent.content && content.responseContent.content.length == 0 &&
                <div className='bg-body-secondary text-center p-5'>
                    -- No data found --
                </div>}
                <ToastContainer/>
        </>

    );
}
