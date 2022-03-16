import React from 'react';
import { useParams } from "react-router";
import styled from './css/HomeStyles.module.css'

const Planets = props => {
    const { num } = useParams();

    return(
        <div className={styled.results}>
            <h2>Planets</h2>
        </div>
    );
}

export default Planets;