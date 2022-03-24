import React, { useState } from 'react';

const Form = props => {
    var errorSize = Object.keys(props.dbError).length;
    const [book,setBook] = useState([])
    const [genre,setGenre] = useState([])

    const lengths = {
        author: 3,
        email: 10
    }

    const onChangeHandler = (event) => {
        props.setForm({...props.form,[event.target.name]: event.target.value})

        if(event.target.name in props.error){
            if(event.target.value.length >= lengths[event.target.name]){
                props.setError({...props.error,[event.target.name]:true})
            }else{
                props.setError({...props.error,[event.target.name]:false})
            }
        }
    }

    const onFocusOutHandler = (event) => {
        const copyCurrentBooks = props.form[event.target.name]
        const arr = copyCurrentBooks.split(',');
        props.setForm({...props.form, [event.target.name]: arr})
    }
    
    return(
        <>
            <h1>{props.title}</h1>
            <form onSubmit={props.onSubmitHandler} >
                <div className="errWrp">
                    {
                        errorSize > 1 ? <><h4>Entries Required: </h4> {Object.keys(props.dbError).join(', ')}</> : ""
                    }
                </div>

                <div>
                    <label htmlFor="author">Author: </label>
                    <input type="text"  name="author" value={props.form.author} placeholder="Author" onChange={onChangeHandler} />
                    {
                        props.error.author ? "" : <span>Please enter an author</span>
                    }
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"  name="email" value={props.form.email} placeholder="example@email.com" onChange={onChangeHandler} />
                    {
                        props.error.email ? "" : <span>Please enter an email</span>
                    }
                </div>
                <div>
                    <label htmlFor="image">Author Image: </label>
                    <input type="text"  name="image" value={props.form.image} placeholder="image url..." onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="books">Books: </label>
                    <input type="text" name="books" value={props.form.books}  onChange={onChangeHandler} placeholder="comma seperated list" onBlur={onFocusOutHandler}/>
                </div> 

                <div>
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" name="genre" value={props.form.genre}  onChange={onChangeHandler} placeholder="comma seperated list" onBlur={onFocusOutHandler}/>
                </div> 
                
                {
                    Object.keys(props.error).every((item) => props.error[item]) ? <input type="submit" value="Create" className="submit" /> : <input type="submit" value="Create" disabled className="disabled" />
                }

            </form>
        </>
    )
}

export default Form;