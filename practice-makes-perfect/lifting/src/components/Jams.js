import React, { useContext } from 'react';
import FormContext from './context/FormContext';

const Jams = (props) =>{
    const {form,setForm} = useContext(FormContext);

    return(
        <div>
            <h2>Jams: {form.name}</h2>
        </div>
    )
}

export default Jams;