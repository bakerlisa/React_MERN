import './App.css';
import Banner from './components/Banner';
import PokemonCard from './components/PokemonCard';
import styled from './components/css/App.module.css';
import { useState } from 'react';

function App() {
  const[poke,setPoke] = useState("");
  const[fetchAll,setFetchAll] = useState([]);

  const onChangeHandler = (event) =>{
    setPoke(event.target.value)
  }

  const onClickHandler = (event) =>{
    event.preventDefault();
    setFetchAll([...fetchAll,poke])
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
          <input type="submit" value="Fetch All" class={styled.submitFetch}/>
        </div>
      </form>
      <PokemonCard />
    </div>
  );
}

export default App;
