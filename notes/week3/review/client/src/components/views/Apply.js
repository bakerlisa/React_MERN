import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Apply = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const [job,setJob] = useState({})

    const [dbErrors,setDBErrors] = useState({})
    var errorSize = Object.keys(dbErrors).length;

    const [form,setForm] = useState({ })
    
    const [error,setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
    })

    const lengths = {
        firstName: 3,
        lastName: 3,
        email: false,
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

    const onEmailHandler = (event) => {

    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/create/person/', form)
            .then(res =>  { 
                history.push("/"); 
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

            <form>
            <div className="">
                    {
                        errorSize > 0 ? <><h4>Entries Required: </h4> {Object.keys(dbErrors).join(', ')}</> : ""
                    }
                </div>

                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={onEmailHandler} />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" onChange={onChangeHandler} />
                </div>
                
                <input type="hidden" name="job" value={id}/>

                <input type="submit" className="submit" />
            </form>
        </div>
    );
}

export default Apply;