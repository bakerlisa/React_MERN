import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Person from '../Person';

const People = (props) => {
    const [people,setPeople] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people').then(response=>{
            setPeople(response.data.Peoples);
        })
    }, []);

    return(
        <div>
            <h1>People!</h1>
            {
                people.map((item,i) => {
                    return <Person key={i} stats={item} />
                })
            }
        </div>
    );
}

export default People;