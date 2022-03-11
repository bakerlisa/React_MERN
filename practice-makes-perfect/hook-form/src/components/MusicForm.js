import React, { useState } from 'react';
import styled from './css/MusicFormStyles.module.css';

const MusicForm = props => {
    const [form,setFrom] = useState({
        genre: "",
        artist: "",
        ablumn: "",
        year: "",
        newsletter: false,
        submitted: false
    });

    const onChangeHandler = (event) => {
        setFrom({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const submitForm = () => {
        setFrom({
            submitted: true
        })
    }

    return(
        <div className={styled.formWrap} >
            <h1>{props.title}</h1>
            <h3>{ form.submitted ?  "Thank you for filling out the form!" : "Please fill out the Ablum information form:"} </h3>
            <div>
                <label htmlFor="genre">Genre:</label>
                <select name="genre" onChange={ onChangeHandler } value={ form.genre }> 
                    <option>Rock</option>
                    <option>Country</option>
                    <option>Pop</option>
                    <option>Blues</option>
                    <option>Hip-Hop</option>
                    <option>Jazz</option>
                </select>
            </div>

            <div>
                <label htmlFor="artist">Artist: </label>
                <input type="text" name="artist" onChange={ onChangeHandler } value={ form.artist }/>
            </div>

            <div>
                <label htmlFor="ablum">Ablum: </label>
                <input type="text" name="ablumn" onChange={ onChangeHandler } value={ form.ablum }/>
            </div>

            <div>
                <label htmlFor="year">Year: </label>
                <input type="number" name="year" onChange={ onChangeHandler } value={ form.year }/>
            </div>

            <div>
                <label htmlFor="newsletter">Newsletter</label>
                <input type="checkbox" name="newsletter" onChange={ onChangeHandler } value={ form.newsletter }/>
            </div>

            <input type="Submit" value="submit" onClick={ submitForm }/>

            <div className={ styled.results }>
                <p><strong>Genre:</strong> { form.genre } </p>
                <p><strong>Artist:</strong> { form.artist } </p>
                <p><strong>Ablum:</strong> { form.ablumn } </p>
                <p><strong>Release Year:</strong> { form.year } </p>
                <p><strong>Newsletter:</strong> { form.newsletter ? "Yes please!" : "No I don't want to be emailed" }</p>
            </div>
        </div>
    );
}

export default MusicForm;