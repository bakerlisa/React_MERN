import logo from './logo.svg';
import './App.css';
import UserReducer from './components/UserReducer';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>What the Duck</h1>
      </div>  
      <UserReducer/>
    </div>
  );
}

export default App;
