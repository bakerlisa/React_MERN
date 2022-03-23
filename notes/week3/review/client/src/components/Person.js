import React from 'react';
import SingleJob from './SingleJob';
import styled from './css/PersonStyles.module.css';

const Person = (props) => {
    const allJobs = props.stats.jobs;

    return(
        <div className={styled.personBox}>
            <h3>{props.stats.firstName} {props.stats.lastName}</h3>
            <p><strong>Phone: </strong> {props.stats.phone}</p>
            <p><strong>Email: </strong> {props.stats.email}</p>
            <p><strong>Jobs Applied For: </strong>
            {
                allJobs.map((item,i) => {
                    return <SingleJob key={i} id={item}/>
                })
            }
            </p>
            
        </div>
    )
}

export default Person;