import React,{ useState } from 'react';
import styled from './css/ToDoStyles.css';

const ToDo = props => {
    const [allToDos,setAllToDos] = useState([])

    const [newItem, setNewItem] = useState({
            task:"",
            valid: false,
            showValid: false
        })

    const onChangeHandler = (event) => {
        setNewItem({
            ...newItem,
            task: event.target.value,
            valid: event.target.value.length < 3 ? false : true,
        })
    }

    const showValid = (event) => {
        setNewItem({
            ...newItem,
            showValid: true
        })
    }
    const sumbitNewTask = (event) => {
        event.preventDefault();
        setAllToDos([...allToDos,newItem])
    }

    return (
        <div className={ styled.listWrp }>

            <div className="form">
                <label htmlFor="newTask">New To Do Item:</label>
                <input type="text" name="newTask" value={ newItem.task} onChange = { onChangeHandler } onBlur={ showValid } />
                {
                    newItem.showValid ? newItem.valid ? "" : <span>Must be three characters long</span> : ""
                }
                <input type="submit" value="submit" onClick = { sumbitNewTask} />
            </div>

            <div className="results">
                <h2>Todays List:</h2>
                <ul>
                    {
                        allToDos.map( (item, i) => 
                            <li key={ i }>{ item.task }</li> )
                    }
                </ul>
            </div>

        </div>
    );
}

export default ToDo;