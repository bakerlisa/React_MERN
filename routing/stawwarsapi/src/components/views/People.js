import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainPerson from '../MainPerson';
import obi from '../img/obi-wan.jpg';
import { Link } from 'react-router-dom';
import Films from '../Films';

const People = (props) => {
    const [error,setErr] = useState("")
    
    const {num} = useParams()

    const [person,setPerson] = useState([])
    const [home,setHome] =  useState("")
    const [films,setFilms] = useState([])
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${num}`)
            .then(response=>{
                setPerson(response.data)
                setFilms(response.data.films)
                setErr("")
                //console.log(response)
                return response
            })
            .then(response=>{
                axios.get( response.data.homeworld )
                .then(response=>{
                    setHome(response.data.name)
                })
                .catch(err=>console.log("err"))
            })
            .catch(err=>{
                setErr("These aren't the droids you're looking for")
            })
    },[num]); 

    return(
        <div>
            {
                error.length > 0 ? <> <h1>{error}</h1> <img src={obi} alt="Obi One Knobi" /></>: 
                <>
                    <h1>{person.name}</h1>
                    <div className="mainPerson">
                        <p><strong> Skin Color: </strong> {person.skin_color}</p>
                        <p><strong> Hair Color: </strong> {person.hair_color}</p>
                        <p><strong> Mass: </strong> {person.mass}</p>
                        <p><strong> Height: </strong> {person.height}</p>
                        <p><strong> Home World: </strong> <Link to={"/planets/" + num}>{home}</Link></p>
                        <p><strong>Stared In: </strong> 
                            { 
                                films.map((item,i) => {
                                    return <Films key={i} link={item}/>
                                }) 
                            }   
                        </p>
                    </div>

                </>
            }
        </div>
    );
}

export default People;