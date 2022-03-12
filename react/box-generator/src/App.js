import './App.css';
// import PizzaMaker from './components/PizzaMaker';
// import NewPizza from './components/NewPizza';
import { useState } from 'react/cjs/react.production.min';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

function App() {
  // const [color, setColor] = useState("There are no orders!");
  
  // const addColor = ( newColor ) => {
  //   setColor( newColor );
  // }

  const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }

  return (
    <div className="App">
      {/* <PizzaMaker title="Make Your Own Pizza!" creatColor = { addColor } />
      <NewPizza  color={color}/> */}

      <div>
        <MessageForm onNewMessage={ youveGotMail } />
        <MessageDisplay message={ currentMsg } />
      </div>
    </div>  
  );
}

export default App;
