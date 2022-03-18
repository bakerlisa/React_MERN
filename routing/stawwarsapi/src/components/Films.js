import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Films = (props) => {
    const [filmTitle,setFilmTitle] = useState("")

    useEffect(()=>{
        axios.get(props.link)
            .then(response=>{
                setFilmTitle(response.data.title)
                return response
            })
            .catch(err=>{ console.log(err) })
    },[props.link]); 

    return(
        <span>{filmTitle}, </span>
    );
}

export default Films;