import './App.css';
import Home from './components/Home';
import Hello from './components/Hello';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Home/>

      <Hello />
    </div>
  );
}

export default App;
