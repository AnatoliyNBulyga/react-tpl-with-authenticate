import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

const Disk = () => {

    const [dragEnter, setDragEnter] = useState(true);
    const [sort, setSort] = useState('type');


    const dragEnterHandler = event => {
        event.preventDefault();
        event.stopPropagation();
        setDragEnter(true);
    };
    const dragLeaveHandler = event => {
        event.preventDefault();
        event.stopPropagation();
        setDragEnter(false);
    };
    const dropHandler = event => {
        event.preventDefault();
        event.stopPropagation();

        setDragEnter(false);
    };

    return ( !dragEnter ?
            <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
               Uploader
            </div>
            :
            <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Drop the files
            </div>
    );
};

export default Disk;