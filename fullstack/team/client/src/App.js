import './App.css';

import { Switch,Route,Link,Redirect } from 'react-router-dom';
import Home from './views/Home';


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
          
        </Route>

        <Route exact path="/status/game/1">

        </Route>

        <Route exact path="/status/game/2">

        </Route>

        <Route exact path="/status/game/3">

        </Route>
        
        <Route><Redirect to="/404" /></Route>
      </Switch>
    </div>
  );
}

export default App;
