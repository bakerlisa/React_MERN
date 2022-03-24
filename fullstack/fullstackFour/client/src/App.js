import './App.css';
import { Switch,Route,Link } from 'react-router-dom';

import AddProductForm from './views/AddProductForm';
import Home from './views/Home';
import SingleProduct from './views/SingleProduct';
import EditProduct from './views/EditProduct';


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
            <AddProductForm />
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
