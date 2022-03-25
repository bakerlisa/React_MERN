import './App.css';

import { Switch,Route,Link,Redirect } from 'react-router-dom';
import Home from './views/Home';
import Add from './views/Add';
import Game from './views/Game';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/players/list">Manage Players</Link> | 
        <Link to="/status/game/1">Manage Player Status</Link>
      </nav>

      <Switch>
        <Route exact path="/players/list">
          <Home />
        </Route>

        <Route exact path="/players/addplayer">
          <Add />
        </Route>

        <Route exact path="/status/game/:num">
          <Game />
        </Route>
        
        <Route><Redirect to="/404" /></Route>
      </Switch>
    </div>
  );
}

export default App;
