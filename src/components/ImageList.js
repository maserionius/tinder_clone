import React from "react"

export const ImageList = ({list}) => (
    <div>
        {list.map(function (stroka) {
            return <img src={stroka} className='image_final_list'/>
        })}
    </div>
);
