import React, { useState,useEffect } from 'react';
import styled from './css/PersonCardStyle.module.css';
import axios from 'axios';

const PersonCard = props => {
    return(
        <div className={styled.personCard}>
            <h2> { props.name } </h2>
            <p className="height"><strong>Height: </strong> {props.height} </p>
            <p className="hairColor"><strong>Hair Color: </strong> {props.hairColor} </p>
            <p className="skinColor"><strong>Skin Color: </strong> {props.skinColor}</p>
        </div>
    );
}

export default PersonCard;