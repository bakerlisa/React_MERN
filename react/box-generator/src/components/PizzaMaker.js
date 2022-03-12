import React, { useState } from 'react';
import styled from './css/PizzaMaker.module.css'
import NewPizza from './NewPizza';

const PizzaMaker = props => {
    const [pizza,setPizza] = useState("");

    const handleOnChange = (event) => {
        setPizza(event.target.value)
    }
    const createPizza = (event) => {
        event.preventDefault();
        props.addColor( pizza );
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <div className={styled.pizza}>
                <label htmlFor="pizza">Pizza Type: </label>
                <input type="text" name="pizza" value={ pizza } onChange={ handleOnChange } />
                <input type="submit" value="Create" className={styled.submit} onClick={ createPizza }/>
            </div>
        </div>
    );
};

export default PizzaMaker;