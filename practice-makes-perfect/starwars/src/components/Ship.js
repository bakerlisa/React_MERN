import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Ship = (props) => {
    const [shipName,setShipName] = useState({})

    useEffect(() => {
        axios.get(props.name).then(response=>{
            var txt = response.data.url;
            var numb = txt.match(/\d/g);
            numb = numb.join("");

            setShipName({ 
                name:response.data.name,
                id:numb
            })
        })
    }, [props.name]);
    var link = `/starships/${ shipName.id }`

    return(
        <li><Link to={link}>{shipName.name}</Link>, </li>
    );
}

export default Ship;

