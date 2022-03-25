import React, { useState } from 'react';

const Form = props => {
    var errorSize = Object.keys(props.dbError).length;

    const lengths = {
        name: 3,
        position: 3
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
                    <label htmlFor="name">Name: </label>
                    <input type="text"  name="name" value={props.form.name} placeholder="John Doe" onChange={onChangeHandler} />
                    {
                        props.error.name ? "" : <span>Please enter an Name</span>
                    }
                </div>

                <div>
                    <label htmlFor="position">Position: </label>
                    <input type="text"  name="position" value={props.form.position} placeholder="Position..." onChange={onChangeHandler} />
                    {
                        props.error.position ? "" : <span>Please enter a position</span>
                    }
                </div>
                
                {
                    Object.keys(props.error).every((item) => props.error[item]) ? <input type="submit" value="Create" className="submit" /> : <input type="submit" value="Create" disabled className="disabled" />
                }

            </form>
        </>
    )
}

export default Form;