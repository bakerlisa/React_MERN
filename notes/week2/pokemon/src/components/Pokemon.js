import React, { useEffect, useState } from 'react';

const Pokemon = props => {
    const [poke,setPoke] = useState("")
    const [pokeShiny,setPokeShiny] = useState("")
    const [hover,setHover] = useState(false)

    //takes 2 parameters
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.pokemon)
        .then(res=>res.json())
        .then(res=>{
            setPoke(res.sprites.front_default)
            setPokeShiny(res.sprites.front_shiny)
            console.log(res.sprites.front_default);
        })
        .catch(err=>console.log(err))
    },[props.pokemon])
    //array will run on load and with the array it will run again if anything in that array changes

    const onClickHandler = (event) =>{

        
    }

    const flipHover = () => setHover(!hover)
    return(
        <div className="pokeBox">
            {
                poke != "" ?
                hover ? <img src={pokeShiny} alt={props.pokemon} onMouseEnter={flipHover} onMouseLeave={flipHover} /> : <img src={poke} alt={props.pokemon} onMouseEnter={flipHover} onMouseLeave={flipHover} /> : ""
            }    
                
            <p>Card Here: {props.pokemon}</p>
            <button onClick={onClickHandler}>Get Image</button>
        </div>
    );
};

export default Pokemon;