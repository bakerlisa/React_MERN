import React from 'react';

const Step = props => {
    return(
        <div className="directionWrapper" onClick={props.onDelete}>
            <span className="direction">
                { props.direction === "right" ? "➡️"
                    : props.direction === "left" ? "⬅️ "
                    : "⬆️"
                }
            </span>
            <div className="instruction">{props.instruction}</div>
            <p className="distance"> {props.distance} miles</p>
        </div>
    );
}

export default Step;