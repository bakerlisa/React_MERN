import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from '../components/Form';

const EditProduct = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [form,setForm] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`).then(response=>{
            setForm(response.data.product);
        })
    }, [id]);

    const [dbError,setDBError] = useState({ })
    const [error,setError] = useState({
        title: true,
        price: true,
        description: true,
        amount: true,
        type: true
    })

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/update/product/${id}`, form)
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
            <Form title={`Edit: ${form.title}`} form={form} setForm={setForm} onSubmitHandler={onSubmitHandler} dbError={dbError} error={error} setError={setError} />
        </div>
    )
}

export default EditProduct;

