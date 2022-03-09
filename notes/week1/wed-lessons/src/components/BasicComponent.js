import React, { Component, useState } from 'react';


const BasicComponent = props => {
    const [pixel, setPixel] = useState("");
    
    const onClickHandler = (e) => {
        pixel.filled ? setPixel({ filled: false }) : setPixel({ filled: true });
        //
    }

    return(
        <div className={ pixel.filled ? 'pixel filled' : 'pixel' } onClick={ onClickHandler }> </div>
    );
}

export default BasicComponent;