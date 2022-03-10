import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FunctionCounter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
