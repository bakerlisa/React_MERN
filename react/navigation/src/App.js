import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormContext from './components/FormContext';
import FormWrapper from './components/FormWrapper';
import Navigation from './components/Navigation';


function App() {
  const [fullName, setFullName] = useState("what is your name?");

  const OnNewName = ( currentName ) => {
    setFullName(currentName)
  }

  return (  
    <FormContext.Provider value={{ fullName,setFullName }} >
        <Navigation/>
        <FormWrapper>
          <Form/>  
        </FormWrapper>
      </FormContext.Provider>
  );

}

export default App;

