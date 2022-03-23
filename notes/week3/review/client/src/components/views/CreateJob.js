import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '../css/CreateJob.module.css'

const CreateJob = (props) => {
    const history = useHistory();

    const [dbErrors,setDBErrors] = useState({})
    var errorSize = Object.keys(dbErrors).length;

    const [form,setForm] = useState({ })

    const [error,setError] = useState({
        title: false,
        company: false,
        salary: false,
        color: false,
        numJobs: false
    })

    const lengths = {
        title: 3,
        company: 5,
        salary: 70000,
        color: 1,
        numJobs: 1
    }

    const onCheckbox = (event) => {
        setForm({...form,[event.target.name]: !form.remote})
    }

    const onSalaryChange = (event) =>{
        setForm({...form,[event.target.name]: event.target.value})
        if(event.target.value >= lengths[event.target.name]){
            setError({...error,[event.target.name]:true})
        }else{
            setError({...error,[event.target.name]:false})
        }
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
        
        if(props.job){
            console.log("here")
            axios.patch(`http://localhost:8000/api/update/jobs/${props.jobID}`, form)
                .then(res =>  { 
                    history.push("/"); 
                })
                .catch(err => {
                    setDBErrors(err.response.data.error.errors)
                });
        }else{
            axios.post('http://localhost:8000/api/create/jobs', form)
                .then(res =>  { 
                    history.push("/"); 
                })
                .catch(err => {
                    setDBErrors(err.response.data.error.errors)
                });
        }
    }


    useEffect(() => {
        if(props.job){ 
            setForm({
                title: props.job.title,
                company: props.job.company,
                salary: props.job.salary,
                remote: props.job.remote,
                color: props.job.color,
                numJobs: props.job.numJobs
            })
            setError({
                title: true,
                company: true,
                salary: true,
                color: true,
                numJobs: true
            })
        }
    }, [props]);

    return(
        <div>
            
            <h1>{props.title}</h1>
            <form onSubmit={onSubmitHandler}>                
                <div className={styled.errWrp}>
                    {
                        errorSize > 0 ? <><h4>Entries Required: </h4> {Object.keys(dbErrors).join(', ')}</> : ""
                    }
                </div>

                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text"  name="title" placeholder="Title" onChange={onChangeHandler} value={form.title} />
                    {
                        error.title ? "" : <span>Please enter a product title</span>
                    }
                </div>
                <div>
                    <label htmlFor="company">Company: </label>
                    <input type="text" name="company" value={form.company} onChange={onChangeHandler} />
                    {
                        error.company ? "" : <span>Please enter a company</span>
                    }
                </div>
                <div>
                    <label htmlFor="salary">Salary: </label>
                    <input type="number" min="70000" value={form.salary} name="salary"  onChange={onSalaryChange} />
                    {
                        error.salary ? "" : <span>Please enter a salary gt 70000</span>
                    }
                </div>
                <div className="checkbox">
                    <label htmlFor="remote">Remote: {form.remote}</label>
                    {
                        form.remote ? <input type="checkbox" name="remote" value={form.remote} onChange={onCheckbox} checked/> : <input type="checkbox" name="remote" value={form.remote} onChange={onCheckbox} />
                    }
                </div>
                <div>
                    <label htmlFor="color">Choose Color for Position Type: </label>
                    <select name="color" onChange={onChangeHandler} value={form.color}>
                        <option>Select Color...</option>
                        <option value="blue">Green - Tech</option>
                        <option value="yellow">Yellow - IT</option>
                        <option value="orange">Orange - Data Scientist</option>
                        <option value="purple">Purple - Frontend</option>
                        <option value="green">Green - Backend</option>
                        <option value="red">Red - Fullstack</option>
                        <option value="pink">General</option>
                    </select>
                    {
                        error.color ? "" : <span>Please choose a color</span>
                    }
                </div>  
                <div>
                    <label htmlFor="numJobs">Number of Openings: </label>
                    <input type="number" min="0" name="numJobs" value={form.numJobs} onChange={onChangeHandler} />
                </div>


                    <input type="hidden" name="active" value={true}/>

                
                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="Create" className="submit" /> : <input type="submit" value="Create" disabled className="disabled"/>
                }

            </form>
        </div>
    )
}

export default CreateJob;