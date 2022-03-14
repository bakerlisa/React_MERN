import React, { useState } from 'react';

const AddDirection = props => {
    const [form,setForm] = useState({
        direction: "left",
        instruction: "",
        distance: 0
    })
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setForm([
            ...steps,
            form
        ])
    }

    return(
        <form>
            <div>
                <label htmlFor="direction">Direction</label>
                <select name="direction" onChange={onChangeHandler}>
                    <option>Left</option>
                    <option>Right</option>
                    <option>Straight</option>
                </select>
            </div>
            <div>
                <label htmlFor="instruction">Direction</label>
                <input type="text" name="instruction" onChange={onChangeHandler}/>
            </div>
            <div>
                <label htmlFor="distance">Miles</label>
                <input  type="number" name="distance" onChange={onChangeHandler}/>
            </div>
            <input type="submit" value="submit" />
        </form>
    )
}

export default AddDirection;