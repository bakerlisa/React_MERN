import './App.css';
import Banner from './components/Banner';
import { useState } from 'react';
import styled from './components/css/AppStyles.module.css';

function App() {
  const [poke, setPoke] = useState([]);

  return (
    <div className="App">
      <Banner title="Pokemon"/>
      <div className={styled.getAllPokes}>

        <div className={styled.wrp}>
          <label htmlFor="pokemon">Get Individual Pokemon</label>
          <input type="text" name="pokemon" placeholder/>
          <input type="submit" value="Get One Pokemon" className={styled.submit} />
        </div>

        <div className={styled.wrp}>
          <label htmlFor="or">Or Get All</label>
          <input type="submit" value="Fetch All!" className={styled.submit} />
        </div>

      </div>
    </div>
  );
}

export default App;
