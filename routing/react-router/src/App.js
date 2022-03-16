import './App.css';
import Home from './components/Home';
import Hello from './components/Hello';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
        
      <Switch>
        <Route exact path="/hello">
          <Hello />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
