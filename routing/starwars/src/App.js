import './App.css';
import { BrowserRouter, Link, Switch, Route, useHistory } from "react-router-dom";

import styled from './components/css/HomeStyles.module.css';

import Banner from './components/Banner';
import Planets from './components/Planets';
import Starships from './components/Starships';
import People from './components/People';
import PersonCard from './components/PersonCard';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const history = useHistory();

  const [allPlanets, setAllPlanets] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [allStarships, setAllStarships] = useState([]);

  const [form,setForm] = useState({
    id: 0,
    type: "people",
    valid: false,
    message: ""
  })

  const onChangeHandler = (event) => {  
      if(event.target.value  < 1){  
      setForm({ ...form, [event.target.name] : event.target.value })
      } else{
        setForm({ ...form, message : "Please chaeck field"})
      }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAllPlanets([...allPlanets, form])  

    axios.get(`https://swapi.dev/api/${form.type}/${form.id}`).then(response=>{
      if(form.type === "people" ){ setAllPeople([...allPeople, response.data])}
      if(form.type === "planets" ){ setAllPlanets([...allPlanets, response.data])}
      if(form.type === "starships" ){ setAllStarships([...allStarships, response.data])}
      console.log(response)
    })

    history.push(`/${form.type}/${form.id}`);
  }

  return (
    <div className="App">
      <Banner title="Star Wars"/>
      <form>
        <label htmlFor="type">Search for: </label>
        {
          form.message.length > 0 ? <p> {form.message } </p> : ""
        }
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
            {
              allPeople.length > 0 ? <h2>Recent Searches</h2> : ""
            }
            <div className={styled.cardsWrapper}>
              {
                allPeople.map((item,i) => {return <PersonCard key={i} name={item.name} height={item.height} hairColor={item.hair_color}  skinColor={item.skin_color} films={item.films}/> })
              }
            </div>
            
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/planets/:num">
            {
              allPlanets.length > 0 ? <h2>Recent Searches</h2> : ""
            }
            <div className={styled.cardsWrapper}>
              {
                allPlanets.map((item,i) => {return <Planets key={i} name={item.name} climate={item.climate} terrain={item.terrain}  gravity={item.gravity} orbit={item.orbital_period}/> })
              }
            </div>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/starships/:num">
            
            {
              allStarships.length > 0 ? <h2>Recent Searches</h2> : ""
            }
            <div className={styled.cardsWrapper}>
              {
                allStarships.map((item,i) => {return <Starships key={i} name={item.name} crew={item.crew} starship_class={item.starship_class}  model={item.model} manufacturer={item.manufacturer}/> })
              }
            </div>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
