import logo from './logo.svg';
import './App.css';
import { Switch,Route,Link } from 'react-router-dom';
import Home from './components/views/Home';


function App() {
  return (
    <div className="App">
      <nav></nav>
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
