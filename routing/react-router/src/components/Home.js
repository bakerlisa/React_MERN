import React from 'react';
import styled from './css/HomeStyles.module.css'
import { useParams } from "react-router";

const Home = props => {
    const { num } = useParams();
    return(
        <div className={styled.bannerTwo}>
            <h1>Welcome To the Future
            {
                num ? `, ${ num }  times welcome!` : "!"
            }
            </h1>
            <p>Where Sci-fi and reality meet! And boredom is rampant...why did we invent robots to do evrything for us </p>
        </div>
    );
}

export default Home;