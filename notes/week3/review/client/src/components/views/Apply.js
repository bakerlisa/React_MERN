import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Apply = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const [job,setJob] = useState({})

    const [dbErrors,setDBErrors] = useState({})
    var errorSize = Object.keys(dbErrors).length;

    const [form,setForm] = useState({ 
        id: [id]
    })
    
    const [error,setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
    })

    const lengths = {
        firstName: 3,
        lastName: 3,
        phone: 10
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

    function ValidateEmail(event) {
        setForm({...form,[event.target.name]:event.target.value})
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            setError({...error,[event.target.name]:true})
        }else{
            setError({...error,[event.target.name]:false})
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/create/person/', form)
            .then(res =>  { 
                console.log(res)
                history.push("/people"); 
            })
            .catch(err => {
                setDBErrors(err.response.data.error.errors)
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
        .then(response=>{
            setJob(response.data.Job);
        })
    }, [id]);

    return(
        <div>
            <h1>Job Application: {job.title}</h1>
            <p><strong>Company: </strong> {job.company}</p>
            <Link to="/account">Already Have an Account</Link>

            <form onSubmit={onSubmitHandler}>
            <div className="errWrp">
                    {
                        errorSize > 0 ? <><h4>Entries Required: </h4> {Object.keys(dbErrors).join(', ')}</> : ""
                    }
                </div>

                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={onChangeHandler} placeholder="John" />
                    {
                        error.firstName ? "" : <span>First Name required: at least 3 characters</span>
                    }
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={onChangeHandler} placeholder="Doe" />
                    {
                        error.lastName ? "" : <span>Last Name required: at least 3 characters</span>
                    }
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={ValidateEmail} placeholder="example@email.com"/>
                    {
                        error.email ? "" : <span>Email required: formatt@example.com </span>
                    }
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" onChange={onChangeHandler} placeholder="1112223334"/>
                    {
                        error.phone ? "" : <span>Phone required: 10 digits</span>
                    }
                </div>
                
                <input type="hidden" name="job" value={id}/>

                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="Create" className="submit" /> : <input type="submit" value="Create" disabled className="disabled"/>
                }
            </form>
        </div>
    );
}

export default Apply;