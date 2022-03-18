import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Films from './Films';

const MainPerson = (props) => {
    var allFilms = props.films


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