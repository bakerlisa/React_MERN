import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planets = (props) => {
    const {num} = useParams()
    const text = "planets";

    const [planet,setPlanet] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${text}/${num}`)
            .then(response=>{
                setPlanet(response.data)
                console.log(response.data)
            })
            .catch(err=>console.log(err))
    },[text,num]);

    return(
        <div>
            <h1>{planet.name}</h1>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            <p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Orbit:</strong> {planet.orbital_period}</p>
            <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
            <p><strong>Gravity:</strong> {planet.gravity}</p>
        </div>
    );
}

export default Planets;