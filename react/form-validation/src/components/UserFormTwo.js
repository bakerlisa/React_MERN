import React, { Component, useReducer } from 'react';
import styles from './css/UserForm.module.css';

const UserForm = (props) => {
    const formSubmitted = (e) => {
        e.preventDefault();
        console.log("submit")
    }
    return(
        <form onSubmit={ formSubmitted } className={styles.forWrp}>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder="Email..." />
            </div>
        <input type="submit" value="Submit New User" className={styles.submit}/>
        </form>
    );
}

export default UserForm;
