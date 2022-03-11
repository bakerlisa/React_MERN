import React from 'react';
import styled from './css/bakersDozenStyles.css'

const BakersDozenFunctional = props => {
    return(
        <div className={styled.bakerswrp}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>


        </div>
    );
}

export default BakersDozenFunctional;