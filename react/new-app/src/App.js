import './App.css';

import NewComponent from './components/newComponent';

function App() {
  return (
    <div className="App">
      <NewComponent title="this is my title for the page"/>
      <NewComponent title="Here's another title"/>
      <NewComponent title="WOW this is awesome!!!"/>
    </div>
  );
}

export default App;
