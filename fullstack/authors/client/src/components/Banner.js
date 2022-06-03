import React from 'react';
import styled from '../css/Banner.module.css'

const Banner = (props) => {
    return(
        <div className="bannerWrp">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner;