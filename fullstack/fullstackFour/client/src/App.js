import './App.css';
import { useState } from 'react';
import { Switch,Route,useHistory,Link } from 'react-router-dom';

import AddProductForm from './components/views/AddProductForm';
import Home from './components/views/Home';
import SingleProduct from './components/views/SingleProduct';
import EditProduct from './components/views/EditProduct';


function App() {

  return (
    <div className="App">

      <nav>
        <Link to="/"> Home </Link>
        <Link to="/add/product">Creat Product</Link>
      </nav>
      
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/add/product">
            <AddProductForm title="Product Form"/>
          </Route>

          <Route exact path="/product/:id">
            <SingleProduct />
          </Route>

          <Route exact path="/edit/product/:id">
            <EditProduct />
          </Route>

        </Switch>

      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
