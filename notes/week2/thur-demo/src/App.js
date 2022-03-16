import './App.css';
import Home from './views/home';
import Second from './views/Second';
import { Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  >
          <Home/>
        </Route>
      </Switch>
      <Second/>
    </div>
  );
}

export default App;
