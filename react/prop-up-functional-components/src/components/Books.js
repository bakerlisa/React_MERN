import React, { Component, useState } from 'react';

import BooksStyles from './css/BooksStyles';
import styles from './css/BooksStyles.module.css';


const Books = props => {
    const[state,setState] = useState({
        clickCount: props.votes
    });
    const countUp = e => {
        console.log(state)
        setState({
            clickCount: state.clickCount + 1
        })
    }
    return(
        <BooksStyles>
            <img src={ props.img } alt="image of books: { props.title }" />
            <h2>{ props.title }</h2>
            <p className="author">{ props.author }</p>
            <p>Total Votes: { state.clickCount}</p>
            <button onClick={countUp}>Cast Your Vote!</button>
        </BooksStyles>
    );
}

export default Books;