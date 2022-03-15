import React, { useContext } from 'react';
import FormContext from './FormContext';

const Form = props => {
    //dcon obj
    const {setFullName} = useContext(FormContext)

    const onFormSubmit = (event) => {
        event.preventDefault();     
        // props.newName( fullName );   
    }
    
    const onChangeHandler = (event) => {
        setFullName(event.target.value)
        
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