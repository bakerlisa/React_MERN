import React from 'react';
import styled from './css/FormWrapperStyles.module.css';
import Form from './Form';

const FormWrapper = props => {
    return(
        <div className={styled.formWrapper}>
            <h2>formwrapper</h2>
            <Form />
        </div>
    );
}

export default FormWrapper;