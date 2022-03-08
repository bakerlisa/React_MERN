import './App.css';

import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App flex">
      <h1>Welcome Authors:</h1>
      <PersonalCard firstName="Emily" lastName="Dickinson" age="149" hairColor="Red" image="img/emily-dickinson.jpeg"/>
      <PersonalCard firstName="Jane" lastName="Eyre" age="175" hairColor="Auburn" image="img/jane-eyre.jpeg"/>
      <PersonalCard firstName="Jane" lastName="Austen" age="247" hairColor="Dark Brown" image="img/jane-austen.jpeg"/>
      <PersonalCard firstName="Ayn" lastName="Rand" age="130" hairColor="Brown" image="img/Ayn_Rand.jpeg"/>
    </div>
  );
}

export default App;
