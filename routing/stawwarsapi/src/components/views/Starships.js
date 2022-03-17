import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Starship = (props) => {
    const {num} = useParams()
    const text = "starships";

    const [starship,setStarship] = useState([])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api//${text}/${num}`)
            .then(response=>{
                setStarship(response.data)
                console.log(response.data)
            })
            .catch(err=>console.log(err))
    },[text,num]); 

    return(
        <div>
            <h1>{starship.name}</h1>
            <p><strong>Crew: </strong> {starship.crew}</p>
            <p><strong>Manufacturer: </strong> {starship.manufacturer}</p>
            <p><strong>Model: </strong> {starship.model}</p>
            <p><strong>Passengers: </strong> {starship.passengers}</p>
        </div>
    )
}

export default Starship;