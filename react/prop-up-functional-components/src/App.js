import './App.css';

import Books from './components/Books';

import HarryPotter from './img/harry-potter.jpeg';
import RedRising from './img/red-rising.jpeg';
import SixOfCrows from './img/six-of-crows.png';
import SteelHeart from './img/steel-heart.jpg';

function App() {
  return (
    <div className="App">
      <Books img={ HarryPotter } title="Harry Potter" author="JK Rowling" votes={10}/>
      <Books img={ RedRising } title="Red Rising" author="Pierce Brown" votes={8}/>
      <Books img={ SixOfCrows } title="Six of Crows" author="Leigh Bardugo" votes={13}/>
      <Books img={ SteelHeart } title="Steelheart" author="Bradndon Sanderson" votes={5}/>
    </div>
  );
}

export default App;
