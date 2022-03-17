import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainPerson from '../MainPerson';

const People = (props) => {
    const {num} = useParams()
    const text = "people";

    const [person,setPerson] = useState([])
    const [home,setHome] =  useState( person.homeworld )
    console.log( home )
    console.log(person.homeworld)
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${text}/${num}`)
            .then(response=>{
                setPerson(response.data)
            })
            .catch(err=>console.log(err))

            axios.get( home )
            .then(response=>{
                console.log(response)
            })
            .catch(err=>console.log(err))
    },[text,num,home]); 

    return(
        <div>
            <h1>{person.name}</h1>
            <MainPerson skinColor={person.skin_color} HairColor={person.hair_color}  mass={person.mass} height={person.height} home={person.homeworld} />
        </div>
    );
}

export default People;