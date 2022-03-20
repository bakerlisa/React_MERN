import './App.css';
import { Switch,Link,Route } from 'react-router-dom';
import Home from './components/views/Home';
import Message from './components/Message';
import MessageDisplay from './components/MessageDisplay';
import { useState } from 'react';
import Orders from './components/views/Orders';
import ViewOrders from './components/ViewOrders';

function App() {
  const [currentMsg, setCurrentMsg] = useState("These are no message")

  const youveGotMail = (newMessage) =>{
    setCurrentMsg(newMessage)
  }

  const [currentOrder,setCurrentOrder] = useState("no orders");

  const youveGotNewOrder = (neworder) => {
    setCurrentOrder(neworder)
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
          <Orders newOrder={youveGotNewOrder}/>
          <ViewOrders allOrders={currentOrder}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
