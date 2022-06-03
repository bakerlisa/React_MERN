import './App.css';

import { Switch,Route,Link } from 'react-router-dom';

import Home from './views/Home';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';
import Error from './views/Error';
import Banner from './components/Banner';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">Create Author</Link>
      </nav>


      <Switch>
        <Route exact path="/">
          <Banner title="Authors" quote="The English language is an arsenal of weapons. If you are going to brandish them without checking to see whether or not they are loaded, you must expect to have them explode in your face from time to time."/>
          <Home />
        </Route>

        <Route exact path="/edit/:id">
          <EditAuthor />
        </Route>

        <Route exact path="/new">
          <NewAuthor />
        </Route>

        <Route exact path="/404">
          <Error />
        </Route>

        <Route><Redirect to="/404" /></Route>
        
      </Switch>
    </div>
  );
}

export default App;
