import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Form from '../components/Form';
import { Link } from 'react-router-dom';


const NewAuthor = (props) => {
    const history = useHistory();
    const [form,setForm] = useState({})

    const [dbError,setDBError] = useState({ })
    const [error,setError] = useState({
        author: false,
        email: false
    })

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // axios.post('http://localhost:8000/api/create/author', form)
        //     .then(res =>  { 
        //         history.push("/"); 
        //     })
        //     .catch(err => {
        //         setDBError(err.response.data.error.errors)
        //     });
    }

    return(
        <div>
            <Form  title="Add Author" form={form} setForm={setForm}  onSubmitHandler={onSubmitHandler} dbError={dbError} error={error} setError={setError} />
            <Link to="/" className="cancle">Cancle</Link>
        </div>
    )
}

export default NewAuthor;