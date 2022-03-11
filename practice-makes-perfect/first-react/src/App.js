import './App.css';
import  UserCard from './components/UserCard';
import UserCardFunctional from './components/UserCardFunctional';
import UserMe from './components/UserMe';

function App() {
  
  return (
    <div className="App">
      <h1>Hello Wolrd</h1>
          <UserCard talents="skiing"/>
          <UserMe num={10}/>
    </div>
  );
}

export default App;
