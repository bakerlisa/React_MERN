import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Form from '../components/Form';

const AddProductForm = props => {
    const history = useHistory();
    const { id } = useParams();
    const [single,setSingle] = useState({})
    const [form,setForm] = useState({}) 
    
    const [dbError,setDBError] = useState({ id:0 })
    var errorSize = Object.keys(dbError).length;

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
            <Form  title={`Edit: ${single.title}`}  />
        </div>
    )
}

export default AddProductForm;