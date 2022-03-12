import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: { 
            value: action.payload,
            error: action.error
        }
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value, error } = e.target;
            if(value.length < 4){
                dispatch({
                    type: name,
                    payload: value,
                    error: 'Please check field, must be 4 character long'
                });
            }else{    
                dispatch({
                    type: name,
                    payload: value,
                    error: ''
                });
            }
        }


        return (
            <div className="form">
                <div>
                    <label>First Name:</label>
                    <input name="firstName" value={state.firstName.value} onChange={handleChange} />
                    { state.firstName.error === null ? "" : <span class='error'>{state.firstName.error}</span> } 
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name="lastName" value={state.lastName.value} onChange={handleChange} />
                    { state.lastName.error === null ? "" : <span class='error'>{state.lastName.error}</span> } 
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email" value={state.email.value} onChange={handleChange}/>
                </div>
                <input type="submit" value="Gather Ducks" class="submit" />
            </div>
        );
    }

