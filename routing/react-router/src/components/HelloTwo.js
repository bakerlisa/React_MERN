import React from 'react';
import { useParams } from "react-router";

const HelloTwo = props => {
    const { colorOne,colorTwo } = useParams();

    const btnStyle = {
        backgroundColor: colorOne,
        color: colorTwo,
        padding: "10px 50px",
        margin: "0",
        fontSize: "25px",
        position: "absolute",
        top: 0,
        left:0,
        width: "100%"
    }

    return(
        <div style={ btnStyle }>
            <h1><marquee> ALERT! ALERT! ALERT! This is a world wide alert! The Aliens are invading! Loose your guts and cover your butts </marquee></h1>
        </div>
    );
}

export default HelloTwo;