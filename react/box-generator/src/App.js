import './App.css';
import { useState } from 'react';

import PizzaMaker from './components/PizzaMaker';
import NewPizza from './components/NewPizza';

// import MessageForm from './components/MessageForm';
// import MessageDisplay from './components/MessageDisplay';

function App() {

  // PIZZA BOX COLORS
  const [allAttr, setAllAttr] = useState([]);
  
  const addBox = ( boxAttr ) => {
    setAllAttr([ ...allAttr, [boxAttr] ]);
  }

  return (
    <div className="App">
      <PizzaMaker title="Make Your Own Pizza!" createBox = { addBox } />

      <div className="pizzas">
          <NewPizza color={ allAttr }/>
      </div>
      
    </div>  
  );
}

export default App;


// MESSAGE 
  // const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  // const youveGotMail = ( newMessage ) => {
  //     setCurrentMsg( newMessage );
  // }

  {/* <div>
        <MessageForm onNewMessage={ youveGotMail } />
        <MessageDisplay message={ currentMsg } />
      </div> */}