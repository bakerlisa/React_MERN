import React, { useState,useEffect } from 'react';
import styled from './css/PersonCardStyle.module.css';
import axios from 'axios';

const PersonCard = props => {
        var films = props.films
        var [titles,setTitle] = useState([])


        // useEffect(() => {
        //     films.map((item,i) => {
        //         return axios.get(`${item}`).then  (response=>{

        //             console.log("yes")
        //     })
        //     }, props.films);
        // })
        
    return(
        <div className={styled.personCard}>
            <h2> { props.name } </h2>
            <p className="height"><strong>Height: </strong> {props.height} </p>
            <p className="hairColor"><strong>Hair Color: </strong> {props.hairColor} </p>
            <p className="skinColor"><strong>Skin Color: </strong> {props.skinColor}</p>
            <div className="films">

                {/* {
                    title.map((item,i) => {return <span key={i}> {item.title}</span>})
                } */}
            </div>
        </div>
    );
}

export default PersonCard;