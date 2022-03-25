import React from 'react';
import { useParams } from 'react-router-dom';
import NavTwo from '../components/NavTwo';

const Game = (props) => {
    const { num } = useParams();
    return(
        <div>
            <NavTwo />
            <h1>Player Status - Game {num}</h1>
            
        </div>
    )
}
export default Game;