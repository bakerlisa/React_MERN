import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const MainPersonCard = props => {
    const homeworld = props.homeworld
    const [home,setHome] = useState([])

    // axios.get(homeworld)
    //     .then(response=>{
    //         console.log(response    )
    //     },allPeople)

    return(
        <div>
            <h2>{props.name}</h2>
            <div>
                <p className="height"><strong>Height: </strong> {props.height} </p>
                <p className="hairColor"><strong>Hair Color: </strong> {props.hairColor} </p>
                <p className="skinColor"><strong>Skin Color: </strong> {props.skinColor}</p>
                <p className="skinColor"><strong>Eye Color: </strong> {props.eyeColor}</p>
                <p className="skinColor"><strong>Home Plant: </strong> { home }</p>
            </div>
        </div>
    );
}

export default MainPersonCard;