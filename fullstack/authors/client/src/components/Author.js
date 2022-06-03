import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/AuthorStyles.module.css'
import Like from './Like';
import sanderson from '../img/sanderson.png'
import iilsa from '../img/iilsa.png'

const Author = (props) => {
    const [books,setBooks] = useState(props.author.books)
    const [genre,setGenre] = useState(props.author.genre)
    return(
        <Link to={`/edit/${props.author._id}`} className={styled.authorBox}> 
            <div className={styled.imgWrp}>{
                <img className={styled.authorImg} src={props.author.image} alt={props.author.author} />
            }</div>

            <div className={styled.nameWrp}>
                <p className={styled.name}>{props.author.author} {props.author.id} </p>
                <Like like={props.author.likes} id={props.author._id} />
            </div>
            <div className={styled.hide}>
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
            </div>
            
        </Link>
    )
}

export default Author;