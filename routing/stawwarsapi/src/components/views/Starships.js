import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import warp from '../img/warp.jpeg';

const Starship = (props) => {
    const [error,setErr] = useState("")
    
    const {num} = useParams()

    const [starship,setStarship] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${num}`)
            .then(response=>{
                setStarship(response.data)
                setErr("")
            })
            .catch(err=>{
                setErr("You'll never see us coming")
                })
    },[num]); 

    return(
        <div>
        {
            error.length > 0 ? <> <h1>{error}</h1> <img src={warp} alt="warp speed" /></> : 

            <div>
                <h1>{starship.name}</h1>
                <p><strong>Crew: </strong> {starship.crew}</p>
                <p><strong>Manufacturer: </strong> {starship.manufacturer}</p>
                <p><strong>Model: </strong> {starship.model}</p>
                <p><strong>Passengers: </strong> {starship.passengers}</p>
            </div>
        }
        </div>
    )
}

export default Starship;