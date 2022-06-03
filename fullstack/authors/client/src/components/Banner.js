import React from 'react';
import styled from '../css/Banner.module.css'

const Banner = (props) => {
    return(
        <div className={`${props.page} banner`} >
            <h1>{props.title}</h1>
            <p className={styled.quote}>{props.quote}</p>
        </div>
    )
}

export default Banner;