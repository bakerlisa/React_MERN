import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,useHistory, useParams } from 'react-router-dom';

const SingleJob = (props) => {
    const { id } = useParams();

    const [job,setJob] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`).then(response=>{
            setJob(response.data.Job);
        })
    }, [id]);

    return(
        <div>
            <h1>{job.title}</h1>
            <h3>{job.company}</h3>
            <p><strong>Salary:</strong> ${job.salary}</p>
            {
                job.remote ? <p>Remote Position</p> : ""
            }
            <Link to={`/apply/${id}`}> Apply</Link>
        </div>
    );
}

export default SingleJob;