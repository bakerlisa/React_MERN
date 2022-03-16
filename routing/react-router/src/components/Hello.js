import React from 'react';
import styled from './css/HomeStyles.module.css'
import { useParams } from "react-router";


const Hello = props => {
    const { text } = useParams();
    return(
        <div className={styled.bannerTwo}>
            <h1>
            {
                isNaN(text) ? `The word is: ${text}` : `The number is: ${text}` 
            }
            </h1>

        </div>   
    );
}

export default Hello;