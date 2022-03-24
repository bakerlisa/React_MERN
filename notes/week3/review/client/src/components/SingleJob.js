import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleJob = (props) =>{
    const [job, setJob] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${props.id}`).then(response=>{
            setJob(response.data.Job);
        })
    }, [props.id]);
    return(
        <Link to={`/jobs/${props.id}`}> {job.title}, </Link>
    )
}

export default SingleJob;