import './App.css';
import { useState } from 'react'

import StyledInput from './conponents/css/StyledInput'
import StyledSubmit from './conponents/css/StyledSubmit'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = [ firstName, lastName, email, password, confirmPassword ]
    console.log("hello!!");
  }

  return (
    <div className="App">
      <h1>Horticulture Connoisseur's</h1>
      <form action="{ createUser }">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <StyledInput type="text" name="first_name" onChange={ (e) => setFirstName(e.target.value) } placeholder="First Name..."/>
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <StyledInput type="text" name="last_name" onChange={ (e) => setLastName(e.target.value) } placeholder="Last Name..."/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" onChange={ (e) => setEmail(e.target.value) } placeholder="Email..."/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <StyledInput type="text" name="password" onChange={ (e) => setPassword(e.target.value) } placeholder="Password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <StyledInput type="text" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) } placeholder="Confirm Password" />
        </div>

        <StyledSubmit type="submit" value="Create User" />
      </form>
      <div>
        <p><strong>User Name:</strong> {firstName} {lastName}</p>
        <p><strong>Email:</strong> { email }</p>
        <p><strong>Password</strong> { password }</p>
        <p><strong>Confirm Password</strong> { confirmPassword }</p>
      </div>
    </div>
  );
}

export default App;
