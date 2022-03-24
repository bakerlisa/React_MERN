import axios from 'axios';
import React, { useState } from 'react';
import styled from '../css/LikesStyles.module.css'

const Like = (props) => {
    const [likes,setLikes] = useState(props.like)

    const addLikeHandler = (amount) =>{
        setLikes(likes + 1 )
        axios.patch(`http://localhost:8000/api/update/author/${props.id}`, likes)
        .then(res =>  { 
            console.log("Liked author")
        })
    }

    return(
        <p className={styled.likes} onClick={() => addLikeHandler(likes) }><strong>Likes:</strong> {likes}</p>
    );
}

export default Like;