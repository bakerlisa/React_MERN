import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Resident from '../Resident';


const Planets = (props) => {
    const { num } = useParams();

    const [planet,setPlanet] = useState({})
    const [residents,setResidents] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${num}`).then(response=>{
            setPlanet(response.data)
            setResidents(response.data.residents)
        })
    }, []);

    return(
        <div>
            <h2>Planets </h2>
            <div>
                <h3>{planet.name} </h3>
                <p><strong>Climate:</strong> {planet.climate}</p>
                <p><strong>Terrain:</strong> {planet.terrain}</p>
                <p><strong>Gravity:</strong> {planet.gravity}</p>
                <p><strong>Population:</strong> {planet.population}</p>
                <p><strong>Surface Water:</strong> {planet.surface_water}</p>
                <ul className="listsWrap"><strong>Residents:</strong>
                    {
                        residents.map((item,i) => {
                            return <Resident key={i} person={item} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Planets;