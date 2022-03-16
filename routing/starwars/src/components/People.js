import React from 'react';
import { useParams } from "react-router";
import styled from './css/HomeStyles.module.css'

const People = props =>{
    const { num } = useParams();
    return(
        <div className={styled.results}>
            <h1>People</h1>
        </div>
    );
}

export default People;