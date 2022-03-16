import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import styled from './components/css/HomeStyles.module.css';
import Banner from './components/Banner';
import Planets from './components/Planets';
import Starships from './components/Starships';
import People from './components/People';
import { useState } from 'react';

function App() {
  const [allStarWarsInfo, setAllStarWarsInfo] = useState([]);

  const [form,setForm] = useState({
    id: 0,
    type: ""
  })

  const onChangeHandler = (event) => {
    setForm({ ...form, [event.target.name] : event.target.value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAllStarWarsInfo([...allStarWarsInfo, form])  
    fetch()
  }
  return (
    <div className="App">
      <Banner title="Star Wars"/>
      <form>
        <label htmlFor="type">Search for: </label>

        <select name="type" onChange={onChangeHandler}>
          <option>people</option>
          <option>planets</option>
          <option>starships</option>
        </select>

        <label htmlFor="id">ID: </label>
        <input type="number" name="id" className="id" onChange={onChangeHandler}/>

        <input type="submit" value="search" className="submit" onClick={onSubmitHandler}/>
      </form>

      <Switch>
        <Route exact path="/people/:num">
          <People />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/planets/:num">
          <Planets />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/starships/:num">
          <Starships />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
