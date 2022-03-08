import './App.css';

import sully from './img/sully.jpeg';
import mike from './img/mike.jpeg';
import stick from './img/stick.jpeg';
import eyeballs from './img/eyeballs.jpeg';

import MonsterCard from './components/MonsterCard';

function App() {
  return (
    <div className="meetTheMonsters">
      <h1>Meet the Monsters</h1>
      <MonsterCard name="Sully" img={sully} rank={1} edu="Monsters University" talent="Roaring,Sneaking, Smashing, Drooling" score={10}/>
      <MonsterCard name="Mike" img={mike} rank={2} edu="Monsters City College" talent="Organizing, Rolling, Hiding, Chewing" score={5}/>
      <MonsterCard name="Skinny Monster" img={stick} rank={53} edu="Scream College" talent="Organizing, Rolling, Hiding, Chewing" score={2}/>
      <MonsterCard name="Eyeballs" img={eyeballs} rank="65" edu="Creep University College" talent="Staring, Flying, Scratching" score={1}/>
    </div>
  );
}

export default App;
