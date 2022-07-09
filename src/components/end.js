import React from "react";

export const End = ({liked, disliked}) => {
    return (
        <div>
            <div>liked:</div>
            {liked.map(function (stroka) {
                return <img src={stroka} className='image_final_list'/>
            })}
            <div>disliked:</div>
            {disliked.map(function (stroka) {
                return <img src={stroka} className='image_final_list'/>
            })}
        </div>
    )
}