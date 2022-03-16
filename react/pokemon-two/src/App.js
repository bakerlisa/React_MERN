import './App.css';
import Banner from './components/Banner';
import PokemonCard from './components/PokemonCard';
import styled from './components/css/App.module.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const[poke,setPoke] = useState("");
  const[fetchAll,setFetchAll] = useState([]);

  const onChangeHandler = (event) =>{
    setPoke(event.target.value)
  }

  const onClickHandler = (event) =>{
    event.preventDefault();
    axios.get(' https://pokeapi.co/api/v2/pokemon/' + poke).then(response=>{

        setFetchAll([...fetchAll,
          {
            pokemon: poke,
            img:response.data.sprites.front_default,
            moves:response.data.moves
          } 
        ]);

    })
  }



  return (
    <div className="App">
      <Banner />
      <form>
        <div>
          <label htmlFor="pokemon">Search for one Pokemon:</label>
          <input type="text" name="pokemon" className={styled.pokemonName} onChange={onChangeHandler}/>
          <input type="submit" value="search" className={styled.submit} onClick={onClickHandler}/>
        </div>

        <div>
          <label htmlFor="allPokes">Fetch All Pokemons:</label>
          <input type="submit" value="Fetch All" className={styled.submitFetch}/>
        </div>
      </form>

      {
        fetchAll.length > 0 ? <h2>Your Party</h2> : ""
      }
      

      {
        fetchAll.map((item,i) => { return <PokemonCard key={i} name={item.pokemon} img={item.img} moves={item.moves} />})
      }
      
    </div>
  );
}

export default App;
