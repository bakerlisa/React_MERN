import React from 'react';
import axios from 'axios';
import styled from './css/Job.module.css'
import { Link,useHistory, useParams } from 'react-router-dom';

const Job = (props) => {
    const history = useHistory();
    
    const onDelete = (event) =>{        
        event.preventDefault();
        if(window.confirm("Are you sure you want to remove this job?")){ 
            // const copystate = [...jobs]
            // copyState.splice(arrInx,1)
            // setJob(copyState)
        }

        axios.delete(`http://localhost:8000/api/delete/jobs/${props.id}`)
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err.response)
        })
    }
    return(
        <div className={styled.jobBox}>
            <h3><Link to={`/jobs/${props.id}`}> {props.title} </Link> </h3>
            <p><strong>Salary:</strong> {props.salary}</p>
            <p><strong>Remote:</strong>   
                {
                    props.remote ? "Yes" : "No remote positions available"
                }
            </p>
            <p><strong>Color: </strong> {props.color}</p>
            <p><strong>Number of Openings: </strong> {props.numJobs}</p>
            <p><strong>Active: </strong> {props.active}</p>
            <div>
                <div onClick={onDelete}>Delete</div>
                <Link to={`/edit/jobs/${props.id}`}>Edit</Link>
            </div>  
        </div>
    )
}

export default Job;