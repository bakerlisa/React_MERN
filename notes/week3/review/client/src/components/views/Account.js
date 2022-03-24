import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Account = (props) => {
    const history = useHistory();
    const [jobs,setJobs] = useState([])
    const [people,setPeople] = useState([])
    const [jobID, setJobID] = useState({
        id:null,
        index: null
    })
    const [applied,setApplied] = useState("")
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/`)
        .then(response=>{
            setJobs(response.data.Jobs)
        })

        axios.get(`http://localhost:8000/api/people/`)
        .then(response=>{
            setPeople(response.data.Peoples)
        })
    }, []);

    const [error,setError] = useState({
        job: false,
        name: false
    })

    const onJobHandler = (event) => {
        setApplied("")
        setJobID({...jobID, id:event.target.value});
        setError({...error,job:true })
    }

    const onNameHandler = (event) => {
        setApplied("")
        setJobID({...jobID,index:event.target.value});
        setError({...error,name:true })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const copyPerson = people[jobID.index]
        const copyPeople = people

        if(copyPerson.jobs.indexOf(jobID.id) < 0){
            console.log(copyPerson.jobs.indexOf(jobID.id))
            setApplied("")
            copyPerson.jobs.splice(1,0,jobID.id)
            copyPeople.splice(jobID.index,1,copyPerson)
            setPeople(copyPeople)

            axios.patch(`http://localhost:8000/api/update/person/${copyPerson._id}`, copyPerson)
                .then(response=>{
                // console.log(response.data)
                history.push("/people");     
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
            });
        }else{
            setApplied("Hmm...looks like you already applied for this job!")
        }
    }

    return(
        <div>
            <h1>Already Have An Account</h1>
            <form onSubmit={onSubmitHandler}>
                {
                    applied ? applied : ""
                }
                <div>
                    <label htmlFor="job">Job</label>
                    <select defaultValue="empty" name="job" onChange={onJobHandler}>
                        <option value="empty" disabled>Select Job</option>
                        {
                            jobs.map((item,i) => {
                                return <option key={i} value={item._id}>{item.title} - {item.company}</option>
                            })
                        }
                    </select>
                </div>

                {
                    error.job ? 
                    <div>
                        <label htmlFor="name">Name:</label>
                        <select name="name" defaultValue="empty" onChange={onNameHandler}>
                            <option value="empty" disabled>Select Name</option>
                            {
                                people.map((item,i) => {
                                    return <option key={i} value={i}>{item.firstName} {item.lastName}</option>
                                })
                            }
                        </select>
                    </div> : ""
                }

                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="Apply" className="submit" /> : <input type="submit" value="Apply" disabled className="disabled"/>
                }
            </form>
        </div>
    )
}

export default Account;