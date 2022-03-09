import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import UseRef from './components/UseRef';

function App() {
  return (
    <div className="App">
      <Counter text="Hello World" num={3} veg={1}/>
      <UseRef/>
    </div>
  );
}

export default App;
