import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import styled from '../css/DeleteStyles.module.css'

const Delete = (props) =>{
    const history = useHistory();
    
    const onDeleteHandler = (i) => {
        if(window.confirm("Are you sure you want to remove this Author?")){ 
            axios.delete(`http://localhost:8000/api/delete/author/${props.id}`).then(response=>{
                console.log("Author deleted")
                history.push("/"); 
            })
        }
    }

    return(
        <div className={styled.delete} onClick={() => {onDeleteHandler(props.indx)} } >Delete</div>
    )
}

export default Delete;