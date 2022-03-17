import React from 'react';

const MainPersonCard = props => {
    return(
        <div>
            <h2>{props.name}</h2>
            <div>
                <p className="height"><strong>Height: </strong> {props.height} </p>
                <p className="hairColor"><strong>Hair Color: </strong> {props.hairColor} </p>
                <p className="skinColor"><strong>Skin Color: </strong> {props.skinColor}</p>
            </div>
        </div>
    );
}

export default MainPersonCard;