import './App.css';
import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import People from './views/People';
import Planets from './views/Planets';
import Starship from './views/Starships';

function App() {
  const [form,setform] = useState("")

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/people/:num">
            <People />
          </Route>

          <Route exact path="/planets/:num">
            <Planets />
          </Route>

          <Route exact path="/starships/:num">
            <Starship />
          </Route>
        </Switch>


    </div>
  );
}

export default App;
