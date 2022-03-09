import React, { Component, useState } from 'react';
import StylePixel from './css/ColorPixelStyles.js';

var randomColor = require('randomcolor');

const ColorPixel = props => {
    const [color,setColor] = useState("white");
    
    const onHover = (e) => {
        var color = randomColor()
        setColor({ color});
        setTimeout(function(){
            setColor({ color: "cccccc"}); 
        },1000);
    }

    return(
        <StylePixel className="pixel" onMouseOver={ onHover } color
        ={color} />  
    );
}

export default ColorPixel;