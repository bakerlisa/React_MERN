import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <PersonCard name="Lisa" age="31" hairColor="brown"/>
      <PersonCard name="Elliot" age="34" hairColor="blonde"/>
      <PersonCard name="Gus" age="2" hairColor="cream"/>
    </div>
  );
}

export default App;
