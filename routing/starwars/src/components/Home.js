import React from 'react';
import { useParams } from "react-router";
import styled from './css/HomeStyles.module.css'

const Home = props => {
    const { num } = useParams();

    return(
        <div className={styled.results}>
            <h1>hello</h1>
        </div>
    );
}

export default Home;