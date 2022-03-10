import React, { useState } from 'react';
import styles from  './css/FunctionCounter.module.css';

const FunctionCounter = (props) => {
    // ===== STATES =====
    const [counter, setCounter] = useState({
        counter: 9,
        direction: true
    });

    // combine them
    const [ userStyles, setUserStyles ] = useState({
        hover: true
    });

    //split them up
    const [ bkcHoverStyles, setBkcHoverStyles ] = useState({
        hoverBKC: "gray",
    });
    const [ bkcStyles, setBkcStyles ] = useState({
        bkc: 'white'
    });
    //doesn't change
    const [ bkcDefaultStyles, setDefaultBkcStyles ] = useState({
        defualtBKC: 'white'
    });


    // ===== METHODS =====
    const count = (direction) => {
        let val;
        direction ? val = 1 :  val =  -1;
        setCounter({counter: counter.counter + val });

        if(counter.counter >= 9 && counter.counter <= 18){
            setBkcStyles({bkc:"orange"})
            setDefaultBkcStyles({defualtBKC:"orange"})
        }else if(counter.counter >= 19 && counter.counter <= 28){
            setBkcStyles({bkc:"yellow"})
            setDefaultBkcStyles({defualtBKC:"yellow"})
        }else{
            setBkcStyles({bkc:"green"})
            setDefaultBkcStyles({defualtBKC:"green"})
        }
    };

    const hoverChange = (e) => {
        setBkcStyles({ bkc: bkcHoverStyles.hoverBKC}) 
    }
    const unHoverChange = (e) => {
        setBkcStyles({ bkc: bkcDefaultStyles.defualtBKC}) 
    }


    // ===== RETURN =====
    return(
        <div style={{ backgroundColor: bkcStyles.bkc }} onMouseOver={ hoverChange } onMouseOut={ unHoverChange } className={styles.box}>
            <h1>Count { counter.counter }</h1>
            <button onClick={ () => {count(true)}}>Click Me!</button>
            <button onClick={ () => {count(false)} }>Don't Click Me!</button>
            <p>This is a class Component!</p>
            <h3>I'm a class too!</h3>
        </div>
    );
}

export default FunctionCounter;