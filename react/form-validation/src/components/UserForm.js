import React, { useReducer } from 'react';
//does not work
import styles from './css/UserForm.module.css';
//this doens't work either
import StyledFormWrp from './StyledBox';


const initialState = {
    firstName: '',
    lastName: '',
    email: ''
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>First Name:</label>
                <input name="firstName" value={state.firstName} onChange={handleChange} placeholder="First Name..."/>
            </div>

            <div>
                <label>Last Name:</label>
                <input name="lastName" value={state.lastName} onChange={handleChange} placeholder="Last Name..."/>
            </div>

            <div>
                <label>Email:</label>
                <input name="email" value={state.email} onChange={handleChange} placeholder="Email..." />
            </div>

            <input type="submit"/>
        </div>
    );
}
