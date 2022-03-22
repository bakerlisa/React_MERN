import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = props => {
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text"  name="title" value="" />
            </div>

        </form>
    )
}