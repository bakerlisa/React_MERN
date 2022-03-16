import React from 'react';
import styled from './css/BannerStyles.module.css';

const Banner = props => {
    return(
        <div className={styled.banner}>
            <h2 className={styled.title}>{ props.title }</h2>
        </div>
    );
}

export default Banner;