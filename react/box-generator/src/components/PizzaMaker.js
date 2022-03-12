import React, { useState } from 'react';
import styled from './css/PizzaMaker.module.css'


const PizzaMaker = props => {
    const [pizza,setPizza] = useState({
        color: "",
        height: "",
        width: ""
    });

    const handleOnChange = (event) => {
        setPizza({ ...pizza,
            [event.target.name]: event.target.value })
    }
    const createPizza = (event) => {
        event.preventDefault();
        props.createBox( [pizza.color, pizza.height, pizza.width] );
        setPizza({ color: "", height: "", width: "" })
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <div className={styled.pizza}>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" value={ pizza.color } onChange={ handleOnChange } />
                </div>

                <div>
                    <label htmlFor="height" >Height:</label>
                    <input type="number" name="height" value={ pizza.height } onChange={ handleOnChange } />
                </div> 

                <div>
                    <label htmlFor="width" >Width:</label>
                    <input type="number" name="width" value={ pizza.width } onChange={ handleOnChange }/>
                </div>

                <input type="submit" value="Create" className={styled.submit} onClick={ createPizza }/>
            </div>
        </div>
    );
};

export default PizzaMaker;