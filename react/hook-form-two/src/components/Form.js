import React from 'react';
import styled from './css/FormStyles.module.css';

const Form = props => {
    return(
        <div className={styled.form}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />

                <input type="submit" value="submit" />
            </div>
        </div>
    );
}

export default Form;