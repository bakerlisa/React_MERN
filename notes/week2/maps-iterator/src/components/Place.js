import React from 'react';
import styled from './css/PlaceStyle.module.css';

const Place = props =>{
    return(
        <div className={styled.place}>
            {props.name}
        </div>
    );
}

export default Place;