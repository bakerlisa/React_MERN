import React from 'react';

const UserCardFunctional = (props) => {
    
    const countUp = () => {

    }
    
    return(
        <div>
        <h1>Hello from the other side!</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.color}</p>
        <button onClick={ countUp }></button>
        </div>
    );
}

export default UserCardFunctional;