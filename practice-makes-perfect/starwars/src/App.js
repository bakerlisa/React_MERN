import './App.css';
import { Switch,Link,Route,useHistory } from 'react-router-dom';
import Home from './components/views/Home';
import People from './components/views/People';
import { useState } from 'react';
import Planets from './components/views/Planets';
import Starships from './components/views/Starships';


function App() {

  const history = useHistory();
  const [error,setError] = useState(false)
  const [form,setForm] = useState({ type:"people", id: "" })

  const onChangeHandler = (event) =>{
    event.target.type == "select-one" ? 
    setForm({...form,[event.target.name]: event.target.value, id:  ""})
    : setForm({...form,[event.target.name]: event.target.value})
    // input and submit validations
    event.target.name === 'id' && event.target.value > 0 ? setError(true) :  setError(false)
  }

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(form.type)
    history.push(`/${form.type}/${form.id}`);
  }

  return (
    <div className="App">
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/people/">People</Link></li>
        <li><Link to="/planets/">Planets</Link></li>
        <li><Link to="/starships/">Starships</Link></li>
      </nav>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="type">Search For:</label>
          <select name="type" onChange={onChangeHandler}>
            <option value="people" >people</option>
            <option value="planets">planets</option>
            <option value="starships">starships</option>
          </select>
        </div>

        <div>
          <label htmlFor="id">ID:</label>
          <input type="number" name="id" min="0" onChange={onChangeHandler} value={form.id} />
          {
            error ? "" : <span>Please input a number</span>
          }
        </div>

          {
            error ? <input type="submit" value="Search" /> : <input type="submit" value="Search" disabled/> 
          }
          
      </form>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/people/:num">
          <People />
        </Route>

        <Route exact path="/planets/:num">
          <Planets />
        </Route>

        <Route exact path="/starship/:num">
          <Starships />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
