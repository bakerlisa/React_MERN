import React from 'react';
import { useParams } from "react-router";
import styled from './css/PersonCardStyle.module.css';

const Planets = props => {
    const { num } = useParams();

    return(
        <div className={styled.personCard}>
            <h2>{ props.name } </h2>
            <p className="height"><strong>Climate: </strong> {props.climate} </p>
            <p className="hairColor"><strong>Terrain: </strong> {props.terrain} </p>
            <p className="skinColor"><strong>Gravity: </strong> {props.gravity}</p>
            <p className="skinColor"><strong>Orbit: </strong> {props.orbit}</p>
        </div>
    );
}

export default Planets;