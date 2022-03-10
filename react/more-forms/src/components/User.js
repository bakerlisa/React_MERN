import React, { useState } from 'react';
import styles from './css/FormStyles.module.css';

const User = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errorTitle, setErrorTitle] = useState("");

    const createUser = (e) => {
        const newUser = { firstName,lastName,email,password,confirmPassword,hasBeenSubmitted };
        console.log("hello World");
    }

    const hadleFirstName = (e) => {
        setFirstName(e.target.value)
        console.log(firstName.length)
        if(firstName.length + 1 < 3){
            setErrorTitle("First Name is required and must be at least 3 characters long")
        }else{
            setErrorTitle("✔️")
        }
    }

    return(
        <form onSubmit={ (e) =>  e.preventDefault() } >
            { hasBeenSubmitted ?
                <h3> Thank you for submitting the form </h3> :
                <h3> Welcome, please submit the form </h3>
            }
            <div>
                <label htmlFor="firstName"> Eman Tsrif: </label>
                <input type="text" name="firstName" onChange={ hadleFirstName } />
                {
                    errorTitle ? <p className="validations">{ errorTitle }</p> : '' 
                }
            </div>
            <div>
                <label htmlFor="lastName"> Eman Tsal: </label>
                <input type="text" name="lastName" onChange={ (e) => setLastName.target.value } />
            </div>
            <div>
                <label htmlFor="email">Liame: </label>
                <input type="text" name="email" onChange={ (e) => setEmail.target.value} />
            </div>
            <div>
                <label htmlFor="password"> Drowssap: </label>
                <input type="text" name="password" onChange={ (e) => password.target.value } />
            </div>
            <div>
                <label htmlFor="confirmPassword"> Mrifnoc Drowssap: </label>
                <input type="text" name="confirmPassword" onChange={ (e) => confirmPassword.target.value } />
            </div>
            <div className="submitWrp">
                <input type="submit" value="Create User"/>
            </div>
        </form>
    )
}

export default User;