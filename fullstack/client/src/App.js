import './App.css';
import { useState } from 'react';
import { Switch,Route,useHistory } from 'react-router-dom';

import Starship from './components/views/Form';

function App() {

  return (
    <div className="App">
      
      <Switch>
        <Route>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
