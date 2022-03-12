import React from 'react';
import styled from './css/PizzaMaker.module.css'

const NewPizza = props => {
    return(
        <div className={styled.pizzaBox} ><span>{props.color}</span></div>
    );
}
export default NewPizza;