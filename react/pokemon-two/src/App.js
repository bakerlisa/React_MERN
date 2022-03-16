import './App.css';
import Banner from './components/Banner';
import PokemonCard from './components/PokemonCard';

function App() {

  return (
    <div className="App">
      <Banner />
      <form>
        <div>
          <label htmlFor="pokemon">Search for one Pokemon:</label>
          <input type="text" name="pokemon" />
          <input type="submit" value="search" />
        </div>

        <div>
          <label htmlFor="allPokes">Fetch All Pokemons:</label>
          <input type="submit" value="Fetch All" />
        </div>
      </form>
      <PokemonCard />
    </div>
  );
}

export default App;
