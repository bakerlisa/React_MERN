import React, { useState,createContext } from 'react';

const FormContext = createContext();

const FormContextProvider = props => {
    const [form,setForm] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();        
    }
    
    const onChangeHandler = (event) => {
        setForm(event.target.value)
    }

    return(

        <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" name="name" placeholder="Bob Smith"  onChange={ onChangeHandler }/>
            <input type="submit" onClick={ onFormSubmit } class="submit"/>
        </form>
    ) ;
}

export default FormContext;