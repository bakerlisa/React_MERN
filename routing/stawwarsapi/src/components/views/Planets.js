import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import exploding from '../img/explode.jpeg';


const Planets = (props) => {
    const [error,setErr] = useState("")

    const {num} = useParams()

    const [planet,setPlanet] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${num}`)
            .then(response=>{
                setPlanet(response.data)
                setErr("")
            })
            .catch(err=>{
                setErr("The Vulcans have destoryed this Planet")
            })
    },[num]);

    return(
        <div>
            {
                error.length > 0 ? <> <h1>{error}</h1> <img src={exploding} alt="exploding planet"/> </>:
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