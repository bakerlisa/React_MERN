import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Author from '../components/Author';

const Home = (props) => {
    const [authors,setSuthos] = useState([])
    
    const _ = require("lodash"); 
    let gfg = _.sortBy(authors, ['_v:', 'author'])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`).then(response=>{
            setSuthos(response.data.authors);
        })
    }, []);


    return(
        <div>
            <div className="allAuthors">
                {
                    gfg.map((item,i) => {
                        return <Author key={i} author={item}/>
                    }) 
                }
            </div>
            <Link to="/new" className="button-lg">Add an Author</Link>
        </div>
    )
}

export default Home;