import './App.css';
import Banner from './components/Banner';
import { useState } from 'react';
import styled from './components/css/AppStyles.module.css';
import PokeCard from './components/PokeCard';
import PokeCardTwo from './components/PokeCardTwo';

function App() {
  const [allPokes,setAllPokes] = useState([])
  const [poke, setPoke] = useState("");

  const [fetchAll,setFetchAll] = useState([]);

  const onChangeHandler = (event) => {
    setPoke(event.target.value.toLowerCase())
  }

  const onClickHandler = (event) => {
    event.preventDefault();

    fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
    .then(response => {
      return response.json();
    }).then(response => {
      setAllPokes([...allPokes, {pokeName: poke, pokeImg: response.sprites.front_default,powers:response.abilities}])
    }).catch(err => {
        console.log(err);
    })

    setPoke("");
  }

  const fetchAllHandler = (event) => {
    event.preventDefault();
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      return response.json();
    }).then(response => {
      setFetchAll(response.results);
      // console.log(response.results)
    }).catch(err => {
        console.log(err);
    })
  };

  return (
    <div className="App">
      <Banner title="Pokemon"/>
      <div className={styled.getAllPokes}>

        <div className={styled.wrp}>
          <label htmlFor="pokemon">Get Individual Pokemon:</label>
          <input type="text" name="pokemon" onChange={onChangeHandler} placeholder="Pokemon name..." value={poke}/>
          <input type="submit" value="Get One Pokemon" onClick={onClickHandler} className={styled.submit} />
        </div>

        <div className={styled.wrp}>
          <label htmlFor="or">Or Get All</label>
          <input type="submit" value="Fetch All!" className={styled.getAll} onClick={fetchAllHandler}/>
        </div>

        <div className={styled.fetchedPokes}>
          {allPokes.length > 0 ? <h2>My Party</h2> : ""}  
            
        {
          allPokes.map((item,i) => {
            return <PokeCard key={i} pokemon={item.pokeName} img={item.pokeImg} powers={item.powers}/>
          })
        }  
        </div>

        <div className={styled.fetchedPokes}>
          {
            fetchAll.length > 0 ? <h2>All Pokemon</h2> : ""
          }   

          <ul className={styled.list}>
            {
              fetchAll.map((item,i) => {
                return <li key={i}> {item.name }</li>
              })
            }
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
