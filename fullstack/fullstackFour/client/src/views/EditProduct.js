import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from '../components/Form';

const EditProduct = (props) => {
    const history = useHistory();
    const { id } = useParams();

    const [single,setSingle] = useState({})

    const [form,setForm] = useState({
        title: props.job.title,
        price: props.job.price,
        description: props.job.description,
        amount: props.job.amount,
        type: props.job.type
    })

    const [dbError,setDBError] = useState({ id:0})
    var errorSize = Object.keys(dbError).length;
    const [error,setError] = useState({
        title: true,
        price: true,
        description: true,
        amount: true,
        type: true
    })

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/update/product/${props.id}`, form)
        .then(res =>  { 
            console.log(res)
            history.push("/"); 
        })
        .catch(err => {
            setDBError(err.response.data.error.errors)
        }); 
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`).then(response=>{
            setSingle(response.data.product);
        })
    }, [id]);

    return(
        
        <div>
            <Form  title={`Edit: ${single.title}`}  />
        </div>
    )
}

export default EditProduct;

