import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/AuthorStyles.module.css'
import Like from './Like';
import sanderson from '../img/sanderson.png'
import iilsa from '../img/iilsa.png'

const Author = (props) => {
    const [books,setBooks] = useState(props.author.books)
    const [genre,setGenre] = useState(props.author.genre)
    const [img,setImg] = useState("")

    
    useEffect(() => {
        if(props.author.author === "Brandon Sanderson"){
            setImg({sanderson});
        }else if(props.author.author === "Ilsa J. Beck "){
            setImg({iilsa});
        }
    })
    return(
        <div className={styled.authorBox}> 
            <div className={styled.imgWrp}>{
                img.length > 0 ? <img className={styled.authorImg} src={img} alt={props.author.author} /> : <img className={styled.authorImg} src={props.author.image} alt={props.author.author} />
            }</div>
            
            <Link to={`/edit/${props.author._id}`} className={styled.name}>{props.author.author}</Link>

            <ul className={styled.booksGenreList}>
                <li><strong>Novels: </strong></li>
            {
                books.map((item,i) => {
                    return <li key={i}>{item}</li>
                })
            }
            </ul>

            <ul className={styled.booksGenreList}>
                <li><strong>Genres:</strong></li>
                {
                    genre.map((item,i) => {
                        return <li key={i}>{ item} </li>
                    })
                }
            </ul>
            <Like like={props.author.likes} id={props.author._id} />
        </div>
    )
}

export default Author;