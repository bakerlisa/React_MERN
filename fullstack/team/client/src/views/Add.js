import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import NavThree from '../components/NavThree';

const Add = (event) => {
    const history = useHistory();

    const [form,setForm] = useState({}) 
    
    const [dbError,setDBError] = useState({ id:0 })
    
    const [error,setError] = useState({
        name: false,
        position: false
    })


    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/create/team', form)
            .then(res =>  { 
                console.log(res)
                history.push("/players/list"); 
            })
            .catch(err => {
                setDBError(err.response.data.error.errors)
            });
    }


    return(
        <>
            <NavThree />
            <Form  title="Add Team" form={form} setForm={setForm}  onSubmitHandler={onSubmitHandler} dbError={dbError} error={error} setError={setError} />
        </>
    );
}

export default Add;