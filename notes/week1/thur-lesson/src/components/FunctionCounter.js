import React, { useState } from 'react';
import styles from  './css/FunctionCounter.module.css';

const FunctionCounter = (props) => {
    const [counter, setCounter] = useState({
        counter: 9,
        direction: "up"
    })

    const coutUp = () => {
        setCounter({counter: counter.counter + 1 })
    };
    const coutDown = () => {
        setCounter({counter: counter.counter - 1 })
    };

    const count = (direction) => {
        console.log(direction)
    };

    return(
        <div className={styles.box}>
            <h1>Count { counter.counter }</h1>
            <button onClick={ {count('up')} }>Click Me!</button>
            <button onClick={ count }>Don't Click Me!</button>
            <p>This is a class Component!</p>
            <h3>I'm a class too!</h3>
        </div>
    );
}

export default FunctionCounter;