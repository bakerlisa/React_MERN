import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [breweries,setBreweries] = useState([]);
  const [form,setForm] = useState("");

  const fetchInfo = (event) =>{
    event.preventDefault();

    fetch("https://api.openbrewerydb.org/breweries?by_state=" + form)
    // fetch("https://api.openbrewerydb.org/breweries?by_state=ohio")
    .then(res => res.json())
    .then(res=>{
      setBreweries(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Beer Beer Beer</h1>
      <p>We all love beer</p>
        <form onSubmit={fetchInfo} >
          <input type="text" name="" onChange={(event)=> setForm(event.target.value)} />
          <button type="submit" onClick={ fetchInfo }>Click me</button>
        </form>  
      <ul>
        {
          breweries.map((item,i) => { 
            return <li key={i}> {item.name} - <span>{ item.city }, { item.state }</span></li> 
          })
        }
      </ul>
    </div>
  );
}

export default App;
