import React from 'react';
import { useParams } from "react-router";
import styled from './css/PersonCardStyle.module.css';

const Starships = props => {
    const { num } = useParams();
    
    return(
        <div className={styled.personCard}>
            <h2> { props.name } </h2>
            <p className="height"><strong>Model: </strong> {props.model} </p>
            <p className="hairColor"><strong>Manufacturer: </strong> {props.manufacturer} </p>
            <p className="skinColor"><strong>Starship Class: </strong> {props.starship_class}</p>
            <p className="skinColor"><strong>Crew: </strong> {props.crew}</p>
        </div>
    )
}

export default Starships;