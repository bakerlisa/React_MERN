import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import styled from './css/PizzaMaker.module.css'

const PizzaMaker = props => {
    const [pizza,setPizza] = useState("");

    const handleOnChange = (event) => {
        setPizza(event.target.value)
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <div className={styled.pizza}>
                <label htmlFor="pizza">Pizza Type: </label>
                <input type="text" name="pizza" value={ pizza } onChange={ handleOnChange } />
                <input type="submit" value="Create" className={styled.submit}/>
            </div>
        </div>
    );
};

export default PizzaMaker;