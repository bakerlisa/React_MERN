import React from 'react';

const MainPerson = (props) => {
    return(
        <div className="mainPerson">
            <p><strong> Skin Color: </strong> {props.skinColor}</p>
            <p><strong> Hair Color: </strong> {props.HairColor}</p>
            <p><strong> Mass: </strong> {props.mass}</p>
            <p><strong> Height: </strong> {props.height}</p>
            <p><strong> Home World: </strong> {props.home}</p>
        </div>
    );
}

export default MainPerson;