import React from 'react';
import confused from '../img/confused.gif'

const Error = (props) => {
    return(
        <div>
            <h1>Hmm...</h1>
            <img src={confused} alt="confused gif" />
            <p>There seems to be some kind of mistake. Would like to add this author?</p>
            <div className="button-lg">Create Author</div>
        </div>
    )
}

export default Error;