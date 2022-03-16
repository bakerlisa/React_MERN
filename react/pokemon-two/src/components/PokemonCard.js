import React from 'react';
import styled from './css/PokemonCardStyles.module.css';

const PokemonCard = props => {
    const allMoves = props.moves

    return(
        <div className={styled.indvPoke}>
            <div className={styled.imgName}>
                <img src={props.img} alt={props.name} />
                <p className={styled.name}>{props.name}</p>
            </div>    

            <div className={styled.moves}><strong>Moves: </strong>
                {
                    allMoves.map((item,i) => {return <span key={i}> {item.move.name},</span>})
                }
            </div>
        </div>
    );
}

export default PokemonCard;