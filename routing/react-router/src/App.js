import './App.css';
import Home from './components/Home';
import Hello from './components/Hello';
import HelloTwo from './components/HelloTwo';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>

 
      <Switch>
        <Route exact path="/:text">
          <Hello />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/:colorOne/:colorTwo">
          <HelloTwo />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
