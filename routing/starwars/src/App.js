import './App.css';
import { BrowserRouter, Link, Switch, Route, useHistory } from "react-router-dom";

import styled from './components/css/HomeStyles.module.css';

import Banner from './components/Banner';
import Planets from './components/Planets';
import Starships from './components/Starships';
import People from './components/People';
import PersonCard from './components/PersonCard';
import MainPersonCard from './components/MainPersonCard';

import { useState } from 'react';
import axios from 'axios';
import MainPlanet from './components/MainPlanet';
import MainStarship from './components/MainStarship';

function App() {
  const history = useHistory();

  const [allPlanets, setAllPlanets] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [allStarships, setAllStarships] = useState([]);

  const [form,setForm] = useState({
    id: 0,
    type: "people"
  })

  const onChangeHandler = (event) => {  
      setForm({ ...form, [event.target.name] : event.target.value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setAllPlanets([...allPlanets, form])  

    axios.get(`https://swapi.dev/api/${form.type}/${form.id}`).then(response=>{
      if(form.type === "people" ){ setAllPeople([...allPeople, response.data])}
      if(form.type === "planets" ){ setAllPlanets([...allPlanets, response.data])}
      if(form.type === "starships" ){ setAllStarships([...allStarships, response.data])}
      // console.log(response)
    })

    history.push(`/${form.type}/${form.id}`);
  }

  return (
    <div className="App">
      <Banner title="Star Wars"/>
      <form>
        <label htmlFor="type">Search for: </label>
        <select name="type" onChange={onChangeHandler} >
          <option disabled>Select...</option>
          <option>people</option>
          <option>planets</option>
          <option>starships</option>
        </select>

        <label htmlFor="id">ID: </label>
        <input type="number" name="id" className="id" min="0" onChange={onChangeHandler}/>

        <input type="submit" value="search" className="submit" onClick={onSubmitHandler}  />
      </form>

      <Switch>
        <Route exact path="/people/:num">
          <div className={styled.cardsWrapper}>
              {
                allPeople.map((item,i) => { 
                  if(allPeople.length - 1 === i) {
                    return   <div className={styled.mainWrapper}>
                      <h2>Main Card</h2>
                      <MainPersonCard key={i} name={item.name} height={item.height} hairColor={item.hair_color}  skinColor={item.skin_color}/>
                      <h2>Other Searchs:</h2>
                      </div>
                    
                  }else{
                    return <PersonCard key={i} name={item.name} height={item.height} hairColor={item.hair_color}  skinColor={item.skin_color}/>
                  }
                })
              }
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/planets/:num">
          <div className={styled.cardsWrapper}>
              {
                allPlanets.map((item,i) => { 
                  if(allPlanets.length - 1 === i) {
                    return <div className={styled.mainWrapper}>
                      <h2>Main Card</h2>
                      <MainPlanet key={i} name={item.name} climate={item.climate} orbit={item.orbital_period} terrain={item.terrain}  gravity={item.gravity} population={item.population} />
                      <h2>Other Searchs:</h2>
                      </div>
                    
                  }else{
                    return <Planets key={i} name={item.name} climate={item.climate} orbit={item.orbital_period} terrain={item.terrain}  gravity={item.gravity} population={item.population} />
                  }
                })
              }
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/starships/:num">
          <div className={styled.cardsWrapper}>
              {
                allStarships.map((item,i) => { 
                  if(allStarships.length - 1 === i) {
                    return <div className={styled.mainWrapper}>
                      <h2>Main Card</h2>
                      <MainStarship key={i} name={item.name} model={item.model} manufacturer={item.manufacturer} starship_class={item.starship_class} crew={item.crew} />
                      <h2>Other Searchs:</h2>
                      </div>
                    
                  }else{
                    return <Starships key={i} name={item.name} model={item.model} manufacturer={item.manufacturer} starship_class={item.starship_class} crew={item.crew} />
                  }
                })
              }
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
