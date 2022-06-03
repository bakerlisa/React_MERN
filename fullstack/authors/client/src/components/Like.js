import axios from 'axios';
import React, { useState } from 'react';
import styled from '../css/LikesStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Like = (props) => {
    const [likes,setLikes] = useState(props.like)

    const addLikeHandler = (amount) =>{
        setLikes(likes + 1 )
        axios.patch(`http://localhost:8000/api/update/author/${props.id}`, likes)
        .then(res =>  { 
        })
    }

    return(
        <p className={styled.likes} onClick={() => addLikeHandler(likes) }><span className={styled.star}><FontAwesomeIcon icon={faStar} /></span> <span className={styled.amount}>{likes}</span></p>
    );
}

export default Like;