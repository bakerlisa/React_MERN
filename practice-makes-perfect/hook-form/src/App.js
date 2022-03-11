import './App.css';
import BakersDozenFunctional from './components/BakersDozenFunctional';
import MusicForm from './components/MusicForm';
import SuperHeroFormClass from './components/SuperHeroFormClass';


function App() {
  return (
    <div>
      <BakersDozenFunctional title="The Bakers Dozen" subtitle="Place your order for delicious dessert delights!"/>
      <SuperHeroFormClass title="Superhero Job Application" />
      <MusicForm title="Music Survey"/>
    </div>
  );
}

export default App;
