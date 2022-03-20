import React from 'react';
import { useParams } from 'react-router-dom';

const Planets = (props) => {
    const { num } = useParams();

    return(
        <div>
            <h2>Planets {num} </h2>
        </div>
    )
}

export default Planets;