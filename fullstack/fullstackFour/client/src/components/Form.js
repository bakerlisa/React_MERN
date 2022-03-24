import React, { useState } from 'react';

const Form = props => {
    const [form,setForm] = useState({})

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
    
    return(
        <>
            <h1>{props.title}</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="errWrp">
                    {
                        errorSize > 1 ? <><h4>Entries Required: </h4> {Object.keys(dbError).join(', ')}</> : ""
                    }
                </div>

                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text"  name="title" value={form.title} placeholder="Title" onChange={onChangeHandler} />
                    {
                        error.title ? "" : <span>Please enter a product title</span>
                    }
                </div>
                <div>
                    <label htmlFor="title">Price: </label>
                    <input type="number" min="0" name="price" value={form.price} step='0.01' placeholder="1.00" onChange={onChangeHandler} />
                    {
                        error.price ? "" : <span>Please enter a price</span>
                    }
                </div>
                <div>
                    <label htmlFor="title">Description: </label>
                    <textarea type="number" min="0" name="description"  placeholder="Description..." onChange={onChangeHandler} value={form.description} ></textarea>
                    {
                        error.description ? "" : <span>Please enter a description</span>
                    }
                </div>

                <div>
                    <label htmlFor="title">Amount: </label>
                    <input type="num" name="amount" value={form.amount} min="0" onChange={onChangeHandler}/>
                    {
                        error.amount ? "" : <span>Please enter an amount</span>
                    }
                </div> 

                <div>
                    <label htmlFor="title">Type: </label>
                    <select name="type" value={form.type} onChange={onChangeHandler}>
                        <option disabled>Select Type...</option>
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

export default Form;