import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom';

const Delete = (props) =>{
    const history = useHistory();
    
    const onDeleteHandler = (i) => {
        if(window.confirm("Are you sure you want to remove this Author?")){ 
            axios.delete(`http://localhost:8000/api/delete/team/${props.id}`).then(response=>{
                const copyTeam = props.team
                const atIndx = copyTeam.indexOf(props.id)
                copyTeam.splice(atIndx,1)
                props.setTeam(copyTeam)
            })
        }
    }

    return(
        <div className="delete" onClick={() => {onDeleteHandler(props.indx)} } >Delete</div>
    )
}

export default Delete;