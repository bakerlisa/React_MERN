import { useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  const [party, setParty] = useState([
  ])

  const [form,setForm] = useState("")

  const onChangeHandler = (event) => {
    setForm(event.target.value)
  }
  const onclickHandler = (event) =>{
    event.preventDefault();
    setParty([...party,form])

  }
  
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <form>
        <input type="text" name="pokemon" onChange={ onChangeHandler }/>
        <input type="submit" value="ad to party" className="submit" onClick={onclickHandler} />
      </form>
      {
        party.map((item,i) => {
          return <Pokemon pokemon={ item } key={i} />
        })  
      }
     
    </div>
  );
}

export default App;
