import './App.css';

import { Switch,Route,useHistory,Link } from 'react-router-dom';

import Home from './components/views/Home';
import SingleJob from './components/views/SingleJob';
import CreateJob from './components/views/CreateJob';
import EditJob from './components/views/EditJob';
import Apply from './components/views/Apply';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add/jobs">Create Job</Link>
      </nav>

      <div className="App">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/add/jobs">
            <CreateJob title="Create Job"/>
          </Route>

          <Route exact path="/jobs/:id">
            <SingleJob />
          </Route>

          <Route exact path="/edit/jobs/:id">
            <EditJob />
          </Route>

          <Route exact path="/apply/:id">
            <Apply />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
