import React from "react";
import {ImageList} from "./ImageList";

export const End = ({liked, disliked}) => {
    return (
        <div>
            <div>liked:</div>
            <ImageList list={liked}></ImageList>
            <div>disliked:</div>
            <ImageList list={disliked}></ImageList>
        </div>
    )
}