import React from 'react';
import { useState } from 'react';

const Form = (props) =>{
    const [formStarted,setFormStarted] = useState(false)

    const [user,serUser] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        confirmPasswrod:""
    })

    const onChangeHandler = (event) => {
        setFormStarted(true)
        serUser({ ...user, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

    const onBlurHandler = (events) =>{
        serUser({...user, blur: true})
    }

    const isLengthValid = (input,num) => {
        return input.length > num;
    }

    const allValid = (inputs) => {
        return isLengthValid(inputs.firstName,3) && isLengthValid(inputs.lastName,3) && isLengthValid(inputs.email,10) 
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="firstName" value={user.firstName}> First Name: </label>
                    <input type="text" name="firstName" onChange={onChangeHandler} onBlur={ onBlurHandler }/>
                    {/* //Or you can check yo see if the form has been started */}
                    {
                        isLengthValid(user.firstName,3) || user.firstName.length === 0 ? "" : <span> First name needs to be at least 3 characters long</span>
                    }
                </div>

                <div>
                    <label htmlFor="lastName" value={user.lastName}>Last Name: </label>
                    <input type="text" name="lastName" onChange={onChangeHandler}/>
                    {
                        isLengthValid(user.lastName,3) || user.lastName.length === 0 ? "" : <span> Last name needs to be at least 3 characters long</span>
                    }
                </div>

                <div>
                    <label htmlFor="email" value={user.email}>Email: </label>
                    <input type="text" name="email" onChange={onChangeHandler}/>
                    {
                        isLengthValid(user.email,10) || user.email.length === 0 ?  "" : <span> Email needs to be at least 10 characters long</span>
                    }
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={onChangeHandler}/>
                    
                </div>

                <div>
                    <label htmlFor="confirmPasswrod">Confirm Password: </label>
                    <input type="text" name="confirmPasswrod" onChange={onChangeHandler}/>
                </div>
                {
                    allValid(form) ?  <input type="submit" value="submit" onClick={onSubmitHandler} /> :  <input type="submit" value="submit" onClick={onSubmitHandler} disabled/>
                }
                

                    <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default Form;