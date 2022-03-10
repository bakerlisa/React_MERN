import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
// import UserReducer from './components/UserReducer';

function App() {
  return (
    <div className="App">
        <h1>User Form</h1>
        <UserForm />
        {/* <UserReducer/> */}
    </div>
  );
}

export default App;