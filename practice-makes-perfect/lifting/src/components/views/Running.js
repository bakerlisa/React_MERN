import React, { useState } from 'react';

const Running = (props) =>{
    const [form,setForm] = useState({
        distance: 0,
        eventType:"",
        name: "",
        newsletter: false,
        date: {},
        email: ""
    })

    const [error,setError] = useState({
        distance: false,
        eventType:false,
        name: false,
        date: false,
        email:false
    })

    const lengths = {
        distance: 1,
        eventType: 1,
        name: 3,
        date: 8,
        email: 5
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.newEvent(form)
    }

    const onChangeHandler = (event) => {
        setForm({...form,[event.target.name]: event.target.value})

        if(event.target.type === "checkbox"){
            setForm({...form,newsletter: !form.newsletter})
        }else if(event.target.name === "email"){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
                setError({...error,[event.target.name]:true})
            }else{
                setError({...error,[event.target.name]:false})
            }
        }else if(event.target.name in error){
            if(event.target.value.length >= lengths[event.target.name]){
                setError({...error,[event.target.name]:true})
            }else{
                setError({...error,[event.target.name]:false})
            }
        }
    }

    return(
        <div>
            <h2>Running</h2>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="distance">Distance</label>
                    <input type="text" name="distance" onChange={onChangeHandler} />
                    {
                        error.distance ? "" : <span>Please select a distance</span>
                    }
                </div>

                <div>
                    <label htmlFor="eventType">Rave Type</label>
                    <select defaultValue="" name="eventType" onChange={onChangeHandler}>
                        <option  value="" disabled>Select...</option>
                        <option>5k</option>
                        <option>10k</option>
                        <option>13.1m</option>
                        <option>26.2m</option>
                        <option>50K</option>
                        <option>50m</option>
                        <option>100m</option>
                    </select>
                    {
                        error.eventType ? "" : <span>Please select an Event</span>
                    }
                </div>

                <div>
                    <label htmlFor="name">Race Organization</label>
                    <input type="text" name="name" onChange={onChangeHandler}/>
                    {
                        error.name ? "" : <span>Please enter the name of the organizintion </span>
                    }
                </div>

                <div>
                    <label htmlFor="newsletter">Newsletter</label>
                    <input type="checkbox" name="newsletter" onChange={onChangeHandler}/>
                </div>

                <div>
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" id="" onChange={onChangeHandler}/>
                    {
                        error.date ? "" : <span>Please enter a date </span>
                    }
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChangeHandler} />
                    {
                        error.email ? "" : <span>Please enter a vaild email</span>
                    }
                </div>

                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="submit" /> : <input type="submit" value="submit" disabled/>
                }
            </form>
        </div>
    );
}

export default Running;