import React, { useReducer } from 'react';
//don't work with reducer??
import styles from './css/UserForm.module.css';
//doesn't work either
import StyledFormWrp from './UserForm';
// ?? how does on add styles??

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

// Walk through it was a bit intimidating and now I'm just curious
// 1. why does it all go into out export function? 
// 2. why do we have 2 returns?


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return(
        // <StyledFormWrp>
        <div>
            {JSON.stringify(state)}
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" value={state.firstName} placeholder="First Name..." onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" value={state.lastName} placeholder="Last Name..." onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={state.email} placeholder="Email..." onchange={handleChange} />
            </div>

            <input type="submit" value="Submit New User" className={ styles.submit } onChange={handleChange}/>
        </div>
        // </StyledFormWrp>
    );
}
