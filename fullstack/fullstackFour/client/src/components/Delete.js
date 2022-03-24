import axios from 'axios'
import React, { useState } from 'react'

const Delete = (props) =>{
    
    const onDeleteHandler = (i) => {
        if(window.confirm("Are you sure you want to remove this job?")){ 
            axios.delete(`http://localhost:8000/api/delete/product/${props.bread[i]._id}`).then(response=>{
                console.log(response)
            })
        }
    }

    return(
        <div onClick={() => {onDeleteHandler(props.indx)} } >Delete</div>
    )
}

export default Delete;