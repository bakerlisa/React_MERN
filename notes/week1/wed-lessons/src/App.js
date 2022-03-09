import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter text="Hello World" num={3} veg={1}/>
    </div>
  );
}

export default App;
