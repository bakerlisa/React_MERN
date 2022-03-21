import { useState,createContext } from 'react';
import { Route,Link,Switch } from 'react-router-dom';
import './App.css';
import FormContext from './components/context/FormContext';
import Jams from './components/Jams';
import Marmalade from './components/Marmalade';
import RunningDisplay from './components/RunningDisplay';
import Jelly from './components/Jelly';
import Running from './components/views/Running';



function App() {
  const [upcomingEvent, setUpComingEvent] = useState("there is no message here");
  
  const onNewEvent = (onEvents) =>{
    setUpComingEvent(onEvents)
  }

  const [form,setform] = useState({})

  return (
    <div className="App">
      <h1>Title</h1>

      <Switch>
        <Route exact path="/">
          
            <Running newEvent={onNewEvent} />
            <RunningDisplay upevent={upcomingEvent} />
          
        </Route>

        <Route exact path="/jelly">
          <FormContext.Provider value={{form,setform}}>
            <Jelly />
            <Jams />
            <Marmalade />
          </FormContext.Provider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
