import React, { useState } from 'react';


const MusicForm = (props) => {
    const [form,setFrom] = useState({
        genre: "",
        artist: "",
        ablumn: "",
        year: "",
        newsletter: false
    });

    return(
        <div  >
            <h1>{this.props.title}</h1>
            <div>
                <label htmlFor="genre">Genre:</label>
                <select name="genre"> 
                    <option value="">Rock</option>
                    <option value="">Country</option>
                    <option value="">Pop</option>
                    <option value="">Blues</option>
                    <option value="">Hip-Hop</option>
                    <option value="">Jazz</option>
                </select>
            </div>

            <div>
                <label htmlFor="artist">Artist: </label>
                <input type="text" name="artist" />
            </div>

            <div>
                <label htmlFor="ablum">Ablum: </label>
                <input type="text" name="album" />
            </div>

            <div>
                <label htmlFor="year">Year: </label>
                <input type="text" name="year" />
            </div>

            <div>
                <label htmlFor="newsletter">Newsletter</label>
                <input type="checkbox" name="newsletter" />
            </div>

            <input type="submit" value="submit" />

            <div>
                <p><strong>Genre:</strong> </p>
                <p><strong>Artist:</strong> </p>
                <p><strong>Ablum:</strong> </p>
                <p><strong>Year:</strong> </p>
                <p><strong>Newsletter:</strong> </p>
            </div>
        </div>
    );
}

export default MusicForm;