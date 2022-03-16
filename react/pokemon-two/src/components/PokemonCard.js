import React from 'react';
import styled from './css/PokemonCardStyles.moduls.css';

const PokemonCard = props => {
    const allMoves = props.moves
    console.log(allMoves)

    return(
        <div className={styled.indvPoke}>
            <img src={props.img} alt={props.name} />
            <p className={styled.name}>{props.name}</p>
            <div ><strong>Moves: </strong>
                {
                    allMoves.map((item,i) => {return <div key={i} className={styled.moves}> {item.move.name}</div>})
                }
            </div>
        </div>
    );
}

export default PokemonCard;