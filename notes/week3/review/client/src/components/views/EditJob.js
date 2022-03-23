import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateJob from './CreateJob';

const EditJob = (props) => {
    const { id } = useParams();
    const [form,setForm] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`).then(response=>{
            console.log(response.data.Job)
            setForm(response.data.Job);
        })
    }, [id]);

    return(
        <div>
            <CreateJob title={`Edit: ${form.title} Job Posting`} job={form} jobID={id}/>
        </div>
    )
}

export default EditJob;