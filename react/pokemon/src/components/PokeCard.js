import React, { useState }  from 'react';
import styled from './css/PokeCardsStyles.module.css';

const PokeCard = props => {
    const allPowers = props.powers
    
    return(
        <div className={styled.card}>
            <img className={styled.pokeImg} src={props.img} alt={props.pokemon} />
            <p className={styled.name}>{props.pokemon}</p>
            <div className="abilities"> <strong>Abilities:</strong> 
            {    
                allPowers.map((item,i) => {return <span key={i}> {item.ability.name}, </span>})
            }
            </div>
        </div>
    );
}

export default PokeCard;