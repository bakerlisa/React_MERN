import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';

const AddProductForm = props => {
    const history = useHistory();

    const [form,setForm] = useState({}) 
    
    const [dbError,setDBError] = useState({ id:0 })
    
    const [error,setError] = useState({
        title: false,
        price: false,
        description: false,
        amount: false,
        type: false
    })


    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/create/product', form)
            .then(res =>  { 
                console.log(res)
                history.push("/"); 
            })
            .catch(err => {
                setDBError(err.response.data.error.errors)
            });
    }


    return(
        <div>
            <Form  title="Add Product" form={form} setForm={setForm}  onSubmitHandler={onSubmitHandler} dbError={dbError} error={error} setError={setError} />
        </div>
    )
}

export default AddProductForm;