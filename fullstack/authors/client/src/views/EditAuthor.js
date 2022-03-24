import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Form from '../components/Form';
import Delete from '../components/Delete';
import { Link } from 'react-router-dom';

const Edit = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [form,setForm] = useState({})

    const [dbError,setDBError] = useState({ })
    const [error,setError] = useState({
        author: true,
        email: true
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`).then(response=>{
            setForm(response.data.author);
        })
        .catch(err => {
            history.push("/404");
        });
    }, [id]);


    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.patch(`http://localhost:8000/api/update/author/${id}`, form)
            .then(res =>  { 
                history.push("/"); 
            })
            .catch(err => {
                setDBError(err.response.data.error.errors)
            });
    }

    return(
        <>
            <div>
                <Form  title={`Edit Author: ${form.author}`} form={form} setForm={setForm}  onSubmitHandler={onSubmitHandler} dbError={dbError} error={error} setError={setError} />
                <Link to="/" className="cancle">Cancle</Link>
                <Delete id={id} />
            </div>
        </>
    )
}

export default Edit;