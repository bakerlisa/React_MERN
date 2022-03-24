import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/AuthorStyles.module.css'
import Like from './Like';

const Author = (props) => {
    const [books,setBooks] = useState(props.author.books)
    const [genre,setGenre] = useState(props.author.genre)

    return(
        <div className={styled.authorBox}>
            <img className={styled.authorImg} src={props.author.image} alt={props.author.author} />
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