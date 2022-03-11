import './App.css';
import UserCard from './components/UserCard';
import UserCardFunctional from './components/UserCardFunctional';

function App() {
  
  return (
    <div className="App">
      <UserCard name="lisa" age="15" color="red"/>
      <UserCardFunctional name="Lisa" age="54" color="black"/>
    </div>
  );
}

export default App;
