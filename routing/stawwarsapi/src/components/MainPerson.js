import React from 'react';
import { Link } from 'react-router-dom';

const MainPerson = (props) => {
    return(
        <div className="mainPerson">
            <p><strong> Skin Color: </strong> {props.skinColor}</p>
            <p><strong> Hair Color: </strong> {props.HairColor}</p>
            <p><strong> Mass: </strong> {props.mass}</p>
            <p><strong> Height: </strong> {props.height}</p>
            <p><strong> Home World: </strong> <Link to={props.homeLink} >{props.home}</Link></p>
        </div>
    );
}

export default MainPerson;