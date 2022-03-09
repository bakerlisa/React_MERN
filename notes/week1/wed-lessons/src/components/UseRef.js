import React, { useRef, useState } from 'react';
 
export default () => {
    const canvas = useRef();
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [color, setColor] = useState('black');
 
    function drawSquare(color, x, y) {
        const ctx = canvas.current.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
 
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 100, 100);
    }
 
    return (
        <>
            <canvas ref={canvas} height="400" width="400"/>
            <div>
                <label>X Coordinate</label>
                <input
                    type="number"
                    min="0"
                    max="200"
                    onChange={e => setXVal(+e.target.value)}
                    value={xVal}
                />
            </div>
            <div>
                <label>Y Coordinate</label>
                <input
                    type="number"
                    min="0"
                    max="200"
                    onChange={e => setYVal(+e.target.value)}
                    value={yVal}
                />
            </div>
            <select
                onChange={e => setColor(e.target.value)}
                value={color}
            >
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
            </select>
            <div>
                <button onClick={() => drawSquare(color, xVal, yVal)}>Draw!</button>
            </div>
        </>
    );
}
