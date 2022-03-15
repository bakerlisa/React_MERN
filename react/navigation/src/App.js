import { useState } from 'react';
import './App.css';
import FormWrapper from './components/FormWrapper';
import Navigation from './components/Navigation';
import Wrapper from './components/Wrapper';

function App() {

  return (
      <Wrapper>
        <Navigation/>
        <FormWrapper />
      </Wrapper>
  );

}

export default App;
