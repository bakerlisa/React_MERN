import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SingleJob = (props) =>{
    const [job, setJob] = useState("")

    console.log(props.id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${props.id}`).then(response=>{
            console.log(response.data.Job);
            setJob(response.data.Job);
        })
    }, [props.id]);
    return(
        <span> {job.title} </span>
    )
}

export default SingleJob;