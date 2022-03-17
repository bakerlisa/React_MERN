import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PersonCard from './components/PersonCard';
import Home from './views/Home';
import Repeater from './views/Repeater';
import Second from './views/Second';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <nav>
        <ul>
          <link> Home </link>
          <link> About </link>
        </ul>
      </nav> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/second">
          <Second />
        </Route>

        <Route exact path="/repeater/:text">
          <Repeater />
        </Route>
      </Switch>

      <PersonCard name="Lisa" age="31" hairColor="brown"/>
      <PersonCard name="Elliot" age="34" hairColor="blonde"/>
      <PersonCard name="Gus" age="2" hairColor="cream"/>
    </div>
  );
}

export default App;
