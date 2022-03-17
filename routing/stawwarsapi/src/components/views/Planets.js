import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import planet from '../img/stars.jpg';

const Planets = (props) => {
    const [error,setErr] = useState("")

    const {num} = useParams()
    const text = "planets";

    const [planet,setPlanet] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${text}/${num}`)
            .then(response=>{
                setPlanet(response.data)
                setErr("")
            })
            .catch(err=>{
                setErr("This Planet was destoryed by Vulcans")
            })
    },[text,num]);

    return(
        <div>
            <img src={planet} alt="" />
            {
                error.length > 0 ? <> <h1>{error}</h1> <img src={planet} alt="exploding planet"/> </>:
                <>
                    <h1>{planet.name}</h1>
                    <p><strong>Climate:</strong> {planet.climate}</p>
                    <p><strong>Terrain:</strong> {planet.terrain}</p>
                    <p><strong>Population:</strong> {planet.population}</p>
                    <p><strong>Orbit:</strong> {planet.orbital_period}</p>
                    <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
                    <p><strong>Gravity:</strong> {planet.gravity}</p>
                </>
            }
        </div>
    );
}

export default Planets;