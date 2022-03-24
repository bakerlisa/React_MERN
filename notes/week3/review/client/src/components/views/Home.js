import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Job from '../Jobs';

const Home = (props) => {
    const [jobs,setJobs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/jobs').then(response=>{
            setJobs(response.data.Jobs);
        })
    }, []);

    return(
        <div>
            <h1>Home</h1>
            {
                jobs.map((item,i) => {
                    return <Job key={i} title={item.title} salary={item.salary} remote={item.remote} color={item.color}  numJobs={item.numJobs} active={item.active} id={item._id}/>
                })
            }
        </div>
    );
}

export default Home;