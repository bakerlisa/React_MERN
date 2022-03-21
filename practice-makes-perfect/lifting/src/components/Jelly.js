import React, { useContext } from 'react';
import FormContext from './context/FormContext';

const Jelly = (props) => {
    const {form,setForm} = useContext(FormContext);

    const onChangeHandler = (event) => {
        setForm({...form,[event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    return(
        <div>
            <h2>Jelly</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={onChangeHandler} />
                </div>
            </form>
        </div>
    )
}

export default Jelly;