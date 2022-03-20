import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pilot from '../Pilot';

const Starships = (props) =>{
    const { num } = useParams();

    const [starship, setStarship] = useState({})
    const [pilots, setPilots] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${num}`).then(response=>{
            setStarship(response.data)
            setPilots(response.data.pilots)
        })
    }, [num]);
    
    return(
        <div>
            <h2>{starship.name}</h2>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            <p><strong>MGLT:</strong> {starship.MGLT}</p>
            <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
            <p><strong>Passengers:</strong> {starship.passengers}</p>
            <ul><strong>Pilots:</strong>
                {
                    pilots.map((item,i) => {
                        return <Pilot key={i} name={item} />
                    })
                }
            </ul>

        </div>
    )
}

export default Starships;