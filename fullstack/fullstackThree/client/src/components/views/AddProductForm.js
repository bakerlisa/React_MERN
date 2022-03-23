import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddProductForm = props => {
    const history = useHistory();

    const [dbError,setDBError] = useState([])

    const [form,setForm] = useState({ 
        title:"",
        price: "",
        description: "",
        amount: "",
        type: ""

    })

    const [error,setError] = useState({
        title: false,
        price: false,
        description: false,
        amount: false,
        type: false
    })

    const lengths = {
        title: 3,
        price: 1,
        description: 10,
        amount: 1,
        type: 1
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
        
        console.log(form)
        axios.post('http://localhost:8000/api/create/product', form)
            .then(res =>  { 
                console.log(res);
                // history.push("/"); 
            })
            .catch(err => {
                console.error(err)
                setDBError(err.response.data.error.errors)
                // console.log(setDBError)
            });
    }
    return(
        <>
            <h1>{props.title}</h1>
            {props.single}
            <form onSubmit={onSubmitHandler}>
                {
                    dbError && dbError.mesage ? "" : dbError.map((item,i) => {
                        return <span key={i}>{item}</span>
                    })
                }

                <div>
                    {
                        props.product ? <label htmlFor="title">Current Title {props.product}: </label> : <label htmlFor="title">Title: </label>
                    }
                    <input type="text"  name="title" value={form.title} placeholder="Title" onChange={onChangeHandler} />
                    {
                        error.title ? "" : <span>Please enter a product title</span>
                    }
                </div>
                <div>
                    {   
                        props.price ? <label htmlFor="title">Current Price {props.price}: </label> : <label htmlFor="title">Price: </label>
                    }
                    <input type="number" min="0" name="price" value={form.price} step='0.01' placeholder="1.00" onChange={onChangeHandler} />
                    {
                        error.price ? "" : <span>Please enter a price</span>
                    }
                </div>
                <div>
                    {      
                        props.description ? <label htmlFor="title">Current description {props.description}: </label> : <label htmlFor="title">Description: </label>
                    }
                    <textarea type="number" min="0" name="description"  placeholder="Description..." onChange={onChangeHandler} value={form.description} ></textarea>
                    {
                        error.description ? "" : <span>Please enter a description</span>
                    }
                </div>

                <div>
                    {      
                        props.amount ? <label htmlFor="title">Current amount {props.amount}: </label> : <label htmlFor="title">Amount: </label>
                    }
                    <input type="num" name="amount" value={form.amount} min="0" onChange={onChangeHandler}/>
                    {
                        error.amount ? "" : <span>Please enter an amount</span>
                    }
                </div> 

                <div>
                    {      
                        props.type ? <label htmlFor="title">Current type {props.type}: </label> : <label htmlFor="title">Type: </label>
                    }
                    <select name="type" value={form.type} onChange={onChangeHandler}>
                        <option>Select Type...</option>
                        <option value="single">Single Item</option>
                        <option value="dozen">Dozen</option>
                    </select>
                    {
                        error.type ? "" : <span>Please enter a type</span>
                    }
                </div>  
                
                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="Create" /> : <input type="submit" value="Create" disabled/>
                }

            </form>
        </>
    )
}

export default AddProductForm;