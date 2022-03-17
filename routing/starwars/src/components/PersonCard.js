import React, { useState,useEffect } from 'react';
import styled from './css/PersonCardStyle.module.css';

const PersonCard = props => {
    var films = props.films
    var [title,setTitle] = useState([])


    useEffect(() => {
        films.map((item,i) => {
            return fetch(item)
                .then(response => response.json())
                .then(response => 
                    // setTitle([...title,response])
                    console.log(response)
                )
            }, []);
        })

        
    return(
        <div className={styled.personCard}>
            <p className="name"><strong>Name:</strong> { props.name } </p>
            <p className="height"><strong>Height: </strong> {props.height} </p>
            <p className="hairColor"><strong>Hair Color: </strong> {props.hairColor} </p>
            <p className="skinColor"><strong>Skin Color: </strong> {props.skinColor}</p>
            <div className="films">
                {
                    title.map((item,i) => {return <span key={i}> {item.title}</span>})
                }
            </div>
        </div>
    );
}

export default PersonCard;