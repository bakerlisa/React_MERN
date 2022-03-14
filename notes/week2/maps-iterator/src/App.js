import './App.css';
import { useState } from "react";

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

  return (
    <div className="App">
      <h1>ICE CREEEEEEEEEEAM!</h1>
      <p>Favorite Ice Cream location</p>
      <div>
        {
          places.map( (item, i) => <p key={ i }>{ item }</p> ) 
        }
        <ol>
        {
          places.map((item,i) => <li key={i}> { item } </li> )
        }
        </ol>
      </div>
    </div>
  );
}

export default App;


// no for loops in your return statements
// mao is a function that takes a funtion as a parameter
//map needs to have JSX (html) tags