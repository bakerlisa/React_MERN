import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainPerson from '../MainPerson';

const People = (props) => {
    const [error,setErr] = useState("")
    
    const {num} = useParams()
    const text = "people";

    const [person,setPerson] = useState([])
    const [home,setHome] =  useState("")
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${text}/${num}`)
            .then(response=>{
                setPerson(response.data)
                setErr("")
                //need to return to chain to children
                console.log(response)
                return response
            })
            .then(response=>{
                axios.get( response.data.homeworld )
                .then(response=>{
                    setHome(response.data.name)
                    console.log(response);
                })
                .catch(err=>console.log("err"))
            })
            .catch(err=>{
                setErr("These aren't the droids you're looking for")
            })
    },[text,num,home]); 

    return(
        <div>
            {
                error.length > 0 ? <> <h1>{error}</h1> <img src={props.img} alt="Obi One Knobi" /></>: 
                <>
                    <h1>{person.name}</h1>
                    <MainPerson skinColor={person.skin_color} HairColor={person.hair_color}  mass={person.mass} height={person.height} home={home} homeLink={"/planets/" + num} />
                </>
            }
                
        </div>
    );
}

export default People;