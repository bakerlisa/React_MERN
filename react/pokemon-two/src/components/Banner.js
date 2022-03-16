import React from 'react';
import styled from './css/BannerStyles.module.css';
import ball from './img/pokemon-ball.png';

const Banner = props =>{
    return(
        <div className={styled.banner}>
            <img src={ball} alt="Pokemon ball" className={styled.ball}/>
            Axios Pokemon API
        </div>
    );
}

export default Banner;