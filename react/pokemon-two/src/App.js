import './App.css';
import Banner from './components/Banner';
import PokemonCard from './components/PokemonCard';
import styled from './components/css/App.module.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const[poke,setPoke] = useState("");
  const[fetchAll,setFetchAll] = useState([]);

  const[allPokemons,setAllPokemons] = useState([]);

  const onChangeHandler = (event) =>{
    setPoke(event.target.value.toLowerCase())
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
        setPoke("")
    })
  }
  const fetchAllHandler = (event) => {
    event.preventDefault();
    axios.get(' https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
        console.log(response.data.results)
        setAllPokemons(response.data.results)
    })
  }

  return (
    <div className="App">
      <Banner />
      <form>
        <div>
          <label htmlFor="pokemon">Search for one Pokemon:</label>
          <input type="text" name="pokemon" className={styled.pokemonName} onChange={onChangeHandler} value={poke} />
          <input type="submit" value="search" className={styled.submit} onClick={onClickHandler} />
        </div>
 
        <div>
          <label htmlFor="allPokes">Fetch All Pokemons:</label>
          <input type="submit" value="Fetch All" className={styled.submitFetch} onClick={fetchAllHandler}/>
        </div>
      </form>

      {
        fetchAll.length > 0 ? <div><h2 className={styled.title}>Your Party</h2><p className={styled.subtitle}>Build you epic world dominating take over party!</p></div> : ""
      }
      

      {
        fetchAll.map((item,i) => { return <PokemonCard key={i} name={item.pokemon} img={item.img} moves={item.moves} />})
      }
      
      {
        allPokemons.length > 0 ? <div><h2 className={styled.title}>All Pokemons!</h2><p className={styled.subtitle}>Bam! Bam! Bam! Lets go to Waaaaaaaar</p></div> : ""
      }  
      <ul>
      {
        allPokemons.map((item,i) => {
          return <li key={i} className={styled.indvPokemon}>{item.name}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
