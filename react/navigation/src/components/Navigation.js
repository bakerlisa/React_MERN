import React, { useContext } from 'react';
import FormContext from './FormContext';

const Navigation = props =>{
    const {fullName} = useContext(FormContext)

    return(
        <nav>
            <h1> Hello { fullName }</h1>
        </nav>
    );
}

export default Navigation;