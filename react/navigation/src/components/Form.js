import React, { useState } from 'react';

const Form = props => {
    const [form,setForm] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();     
        props.newName( form );   
    }
    
    const onChangeHandler = (event) => {
        setForm(event.target.value)
        
    }

    return(

        <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" name="name" placeholder="Bob Smith"  onChange={ onChangeHandler }/>
            <input type="submit" onClick={ onFormSubmit } className="submit"/>
        </form>
    ) ;
}

export default Form;