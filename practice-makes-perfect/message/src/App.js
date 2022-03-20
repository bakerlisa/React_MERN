import './App.css';
import { Switch,Link,Route } from 'react-router-dom';
import Home from './components/views/Home';
import Message from './components/Message';
import MessageDisplay from './components/MessageDisplay';
import { useState } from 'react';
import Orders from './components/views/Orders';

function App() {
  const [currentMsg, setCurrentMsg] = useState("These are no message")

  const youveGotMail = (newMessage) =>{
    setCurrentMsg(newMessage)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/message">
          <Message onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg }/>
        </Route>

        <Route exact path="/orders">
          <Orders />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
