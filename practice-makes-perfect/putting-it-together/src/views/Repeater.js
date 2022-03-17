import React from 'react';
import { useParams } from 'react-router-dom';

const Repeater = (props) => {
    
    const {text} = useParams();

    return(
        <div>
            <h2>Repeater</h2>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
            <h1><marquee> Repeat { text } </marquee></h1>
        </div>
    );
}

export default Repeater;