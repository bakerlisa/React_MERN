import React, { Component, useState } from 'react';
import StylePixel from './css/StylePixel.js';

var randomColor = require('randomcolor');

const ColorPixel = props => {
    const [color,setColor] = useState("white");
    
    const onHover = (e) => {
        var color = randomColor()
        setColor({ color});
        console.log({ color })
    }

    return(
        <StylePixel className="pixel" onMouseOver={ onHover } color
        ={color} />  
    );
}

export default ColorPixel;