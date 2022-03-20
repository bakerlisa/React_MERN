import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Resident = (props) => {
    const [people,setPeople] = useState("")

    useEffect(() => {
        axios.get(props.person).then(response=>{
            setPeople(response.data.name)
            console.log(response)
        })
    }, [props.person]);

    return(
        <li><Link to={props.person}>{ people}, </Link></li>
    );
}

export default Resident;