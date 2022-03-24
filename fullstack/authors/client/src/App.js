import './App.css';

import { Switch,Route,Link } from 'react-router-dom';

import Home from './views/Home';
import Edit from './views/Edit';
import NewAuthor from './views/NewAuthor';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">Create Author</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/edit/:id">
          <Edit />
        </Route>

        <Route exact path="/new">
          <NewAuthor />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
