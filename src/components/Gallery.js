import React from 'react';
import img from "../девчонка_танцевалка.jpg";
const Gallery = (props) => {
    return (
        <div>
            <img src={props.images[props.x]} className="image" alt="girl" />
        </div>
    );
};

export default Gallery;