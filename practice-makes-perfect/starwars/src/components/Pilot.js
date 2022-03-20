import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Pilot = (props) => {
    const [pilotName,setPilotName] = useState({})

    useEffect(() => {
        axios.get(props.name).then(response=>{
            var txt = response.data.url;
            var numb = txt.match(/\d/g);
            numb = numb.join("");

            setPilotName({ 
                name:response.data.name,
                id:numb
            })

        })
    }, [props.name]);
    var link = `/people/${pilotName.id}`
    return(
        <li><Link to={link}> {pilotName.name}</Link></li>
    )
}

export default Pilot;