import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Like = (props) => {
    const [likes,setLikes] = useState(props.like)

    const addLikeHandler = (amount) =>{
        //add one to like of that author
        setLikes(likes + 1 )
        axios.patch(`http://localhost:8000/api/update/author/${props.id}`, likes)
        .then(res =>  { 
            console.log(res)
        })
    }

    return(
        <p className="likes" onClick={() => addLikeHandler(likes) }><strong>Likes:</strong> {likes}</p>
    );
}

export default Like;