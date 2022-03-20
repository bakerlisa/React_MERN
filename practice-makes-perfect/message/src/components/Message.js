import React, { useState } from 'react';

const Message = (props) => {
    const [form,setform] = useState({
        firstName: "",
        lastName: "",
        message: "",
    });

    const [error,setError] = useState({
        firstName: false,
        lastName: false,
        message: false
    })

    const vaildLength = {
        firstName: 4,
        lastName: 4,
        message: 10
    }

    const onChangeHandler = (event) => {
        setform({...form,[event.target.name]: event.target.value})
        var currentName = event.target.name
        event.target.value.length >= vaildLength[currentName] ? setError({...error, [currentName]: true}) : setError({...error, [currentName]: false})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onNewMessage( form );
    }

    return(
        <div>
            <h2>Message </h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={ onChangeHandler } />
                        {
                        error.firstName ? "" : <span>First name must be longers that 4 characters</span> 
                        }
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={ onChangeHandler} />
                    {
                        error.lastName ? "" : <span>First name must be longers that 4 characters</span> 
                    }
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" cols="30" rows="10" onChange={ onChangeHandler }></textarea>
                    {
                        error.message ? "" : <span>First name must be longers that 10 characters</span> 
                    }
                </div>

                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="submit" /> : <input type="submit" value="submit" disabled/> 
                }
            </form>
        </div>
    );
}

export default Message;