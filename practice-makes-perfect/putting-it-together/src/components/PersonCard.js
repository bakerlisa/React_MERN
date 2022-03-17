import React, { useState } from 'react';

const PersonCard = props =>{
    const [age,setAge] = useState(props.age)

    const onClickHandler = () =>{
        setAge(parseInt(age) + 1) 
    }

    const onClickHandlerDecrease = () => {
        setAge(parseInt(age) + 1)  
    }

    return(
        <div>
            <h2> {props.name} </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ onClickHandler } > Its my Birthday!</button>
            <button onClick={ onClickHandlerDecrease } >Decrease Age</button>
        </div>
    );
}

export default PersonCard;