import React from 'react';
import styled from './css/PizzaMaker.module.css'

const NewPizza = props => {
    var allBoxes = props.color

    return(
        <div className={styled.pizzas}>
            {
                allBoxes.map( (item, x) => (
                    <div className={styled.pizzaBox} key={ x } style={{ backgroundColor: item[0][0], height: item[0][1] + "px", width:item[0][2] + "px" }} ><span></span></div> 
                ))
            }
        </div>
    );
}
export default NewPizza;

