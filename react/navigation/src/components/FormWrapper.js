import React from 'react';

const FormWrapper = props =>{
    return(
        <div className="formWrapper">
            {props.children}
        </div>
    );
}

export default FormWrapper;