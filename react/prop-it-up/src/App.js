import './App.css';
import AynRand from "./img/Ayn_Rand.jpeg";
import JaneAustin from "./img/jane-austen.jpeg";
import EmilyDickinson from "./img/emily-dickinson.jpeg";
import JaneEyre from "./img/jane-eyre.jpeg";

import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App flex">
      <h1>Welcome Authors:</h1>
      <PersonalCard firstName="Emily" lastName="Dickinson" age="149" hairColor="Red" image={EmilyDickinson}/>
      <PersonalCard firstName="Jane" lastName="Eyre" age="175" hairColor="Auburn" image={JaneEyre} />
      <PersonalCard firstName="Jane" lastName="Austen" age="247" hairColor="Dark Brown" image={JaneAustin} />
      <PersonalCard firstName="Ayn" lastName="Rand" age="130" hairColor="Brown" image={AynRand} />
    </div>
  );
}

export default App;
