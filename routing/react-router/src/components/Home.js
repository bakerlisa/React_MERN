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
            <p>Where Sci-fi and reality meet! Where we are so bored because robots do all the work for us</p>
        </div>
    );
}

export default Home;