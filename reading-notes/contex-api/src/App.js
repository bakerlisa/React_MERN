import './App.css';
import MyContext from './context/MyContext';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"context value"}>
        <h1>How weird are you?</h1>
        <p>Have you ever / would you ever?</p>
      </MyContext.Provider>
    </div>
  );
}

export default App;
