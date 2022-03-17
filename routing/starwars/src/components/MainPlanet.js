import React from 'react';
import styled from './css/PersonCardStyle.module.css';

const MainPlanet = props => {
    return(
        <div className={styled.personCard}>
            <h2>{ props.name } </h2>
            <p className="skinColor"><strong>Orbit: </strong> {props.orbit}</p>
            <p className="skinColor"><strong>Gravity: </strong> {props.gravity}</p>
            <p className="height"><strong>Climate: </strong> {props.climate} </p>
            <p className="hairColor"><strong>Terrain: </strong> {props.terrain} </p>
            <p className="hairColor"><strong>Population: </strong> {props.population} </p>
        </div>
    );
}

export default MainPlanet;