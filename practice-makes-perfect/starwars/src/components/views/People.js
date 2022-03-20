import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ship from '../Ship';


const People = (props) =>{

    const { num } = useParams();
    const [people,setPeople] = useState({})
    const [starships,setStarships] = useState([])
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${num}`).then(response=>{
            setPeople(response.data)
            setStarships(response.data.starships)
        })
    }, [num]);
    
    return(
        <div>
            <h2>{people.name}</h2>
            <p><strong>Hair Color:</strong> {people.hair_color}</p>
            <p><strong>Height:</strong> {people.height}</p>
            <p><strong>Skin Color:</strong> {people.skin_color}</p>
            <p><strong>Eye Color:</strong> {people.eye_color}</p>
            <ul  className="listsWrap"><strong>Flies: </strong>
                {
                    starships.map((item,i) => {
                        return <Ship name={item}/>
                    })
                }
            </ul>
        </div>
    )
}

export default People;