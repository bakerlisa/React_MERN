import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormWrapper from './components/FormWrapper';
import Navigation from './components/Navigation';
import Wrapper from './components/Wrapper';

function App() {
  const [fullName, setFullName] = useState("what is your name?");

  const OnNewName = ( currentName ) => {
    setFullName(currentName)
  }

  return (
      <Wrapper>
        <Navigation name={ fullName } />
        <FormWrapper >
          <Form newName={ OnNewName }/>  
        </FormWrapper>
      </Wrapper>
  );

}

export default App;
