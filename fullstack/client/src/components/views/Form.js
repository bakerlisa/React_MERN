import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [form,setForm] = useState({})

    const [error,setError] = useState({
        title: false,
        price: false,
        decription: false,
    })

    const lengths = {
        title: 3,
        price: 1,
        decription: 10,
    }

    const onChangeHandler = (event) => {

    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return(
        <>
            <h1>Product Form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text"  name="title" value="" placeholder="Title" onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" min="0" name="price" step='0.01' placeholder="1.00"/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea type="number" min="0" name="description"  placeholder="Description..."></textarea>
                </div>
                <input type="submit" value="Create" />

            </form>
        </>
    )
}

export default Form;