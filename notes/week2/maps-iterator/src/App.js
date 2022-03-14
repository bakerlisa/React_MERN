import './App.css';
import { useState } from "react";
import Place from './components/Place';
import styled from './components/css/PlaceStyle.module.css';

function App() {
  const [places,setPlaces] = useState([
    "🍨 Mason's Creamy",
    "🍨  Mitchell's Ice Cream",
    "🍦 Dairy Queen",
    "🍨 Swan Valley Creamy",
    "🍨 Inova",
    "🍦 Cold Stone",
    "🍨 Homemade Ice Cream",
    "🍦 Baskin Robins",
    "🍦 TCBY"
  ]);

  const [form,setForm] = useState("");

  const onChangeHandler = (event) =>{
    setForm(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newArr = [ ...places, form ]
    setPlaces(newArr);
    setForm("");
  }

  return (
    <div className="App">
      <h1>ICE CREEEEEEEEEEAM!</h1>
      <p>Favorite Ice Cream location</p>
      <form onSubmit={ onSubmitHandler }>
        <input type="text" name="name" placeholder="Add your favorite ice cream parlor!" onChange={ onChangeHandler } value={form} className={styled.input}/>
        <input type="submit" value="Add" className={styled.submit}/>
      </form>
      <div className={ styled.formWrapper }>
        {
          places.map( (item, i) => <Place name={item} key={ i } /> ) 
        }
      </div>
    </div>
  );
}

export default App;


// no for loops in your return statements
// map is a function that takes a funtion as a parameter
// map needs to have JSX (html) tags
// need a new array or nothing will happen