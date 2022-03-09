import React, { Component } from 'react';

import BooksStyles from './css/BooksStyles';


const Books = props => {
    return(
        <BooksStyles>
            <img src={ props.img } alt="image of books: { props.title }" />
            <h2>{ props.title }</h2>
            <p className="author">{ props.author }</p>
            <p>Total Votes: { props.votes }</p>
        </BooksStyles>
    );
}

export default Books;