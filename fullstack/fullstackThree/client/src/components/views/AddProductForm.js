import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddProductForm = props => {
    const [form,setForm] = useState({})

    const [error,setError] = useState({
        title: false,
        price: false,
        description: false,
    })

    const lengths = {
        title: 3,
        price: 1,
        description: 10,
    }

    const onChangeHandler = (event) => {
        setForm({...form,[event.target.name]: event.target.value})

        if(event.target.name in error){
            if(event.target.value.length >= lengths[event.target.name]){
                setError({...error,[event.target.name]:true})
            }else{
                setError({...error,[event.target.name]:false})
            }
        }
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
                    <input type="text"  name="title" placeholder="Title" onChange={onChangeHandler} />
                    {
                        error.title ? "" : <span>Please enter a product title</span>
                    }
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" min="0" name="price" step='0.01' placeholder="1.00" onChange={onChangeHandler} />
                    {
                        error.price ? "" : <span>Please enter a price</span>
                    }
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea type="number" min="0" name="description"  placeholder="Description..." onChange={onChangeHandler} ></textarea>
                    {
                        error.description ? "" : <span>Please enter a description</span>
                    }
                </div>

                <input type="hidden" name="amount" value="1" />
                
                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="Create" /> : <input type="submit" value="Create" disabled/>
                }

            </form>
        </>
    )
}

export default AddProductForm;