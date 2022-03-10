import React, { useState } from 'react';
import styles from './css/FormStyles.module.css';

// Noticed when I was trying to compare passwords

// 1. I can add a space in my use State to get the correct length
// 2. it's still not picking up on the first key press - always one kepress behing
    //  - looked at keypress, keydown - kepted getting errors

// 3. This validation code looks clunky to me

const User = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState(" ");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        console.log("hello World")
        const newUser = { firstName, lastName, email, password, confirmPassword, hasBeenSubmitted }
        setHasBeenSubmitted( true );
    }

    const hadleFirstName = (e) => {
        setFirstName(e.target.value);
        if(firstName.length <= 3){
            setErrorFirstName("First Name is required and must be at least 3 characters long")
        }else{
            setErrorFirstName("✔️")
        }
    }

    const hadleLastName = (e) => {
        setLastName(e.target.value);
        if(lastName.length <= 3){
            setErrorLastName("Last Name is required and must be at least 3 characters long")
        }else{
            setErrorLastName("✔️")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(email.length + 1 <= 8){
            setErrorEmail("Please log an email")
        }else{
            setErrorEmail("✔️")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password)
        console.log(`length: ${password.length}`)
        if(password.length  < 5){
            setErrorPassword("Password must be 7 characters")
        }else{
            setErrorPassword("✔️")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        console.log(`password ${password}`)
        console.log(`confirmPassword ${confirmPassword}`)
        if(confirmPassword != password){
            setErrorConfirmPassword("Passwords must match")
        }else{
            setErrorConfirmPassword("✔️")
        }
    }

    return(
        <form onSubmit={ createUser } >
            { hasBeenSubmitted ?
                <h3> Thank you for submitting the form </h3> :
                <h3> Welcome, please submit the form </h3>
            }

            <div>
                <label htmlFor="firstName"> Eman Tsrif: </label>
                <input type="text" name="firstName" onChange={ hadleFirstName } />
                <p className="validations">{ errorFirstName }</p>
            </div>
            
            <div>
                <label htmlFor="lastName"> Eman Tsal: </label>
                <input type="text" name="lastName" onChange={ hadleLastName } />
                <p className="validations">{ errorLastName }</p>
            </div>

            <div>
                <label htmlFor="email">Liame: </label>
                <input type="text" name="email" onChange={ handleEmail } />
                <p className="validations">{ errorEmail }</p>
            </div>

            <div>
                <label htmlFor="password"> Drowssap: </label>
                <input type="text" name="password" onChange={ handlePassword } value={ password } />
                <p className="validations">{ errorPassword }</p>
            </div>

            <div>
                <label htmlFor="confirmPassword"> Mrifnoc Drowssap: </label>
                <input type="text" name="confirmPassword" onChange={ handleConfirmPassword } />
                <p className="validations">{ errorConfirmPassword }</p>
            </div>

            <div className={ styles.submitWrp }>
                <input type="submit" value="Etaerc Resu" className="submit"/>
            </div>
        </form>
    )
}

export default User;