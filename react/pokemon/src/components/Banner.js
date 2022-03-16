import React from 'react';
import styled from './css/BannerStyles.module.css'

const Banner = (props) => {
    return(
        <div className={styled.banner}>
            <h1 className={styled.title}>{ props.title }</h1>
        </div>
    );
}
export default Banner;