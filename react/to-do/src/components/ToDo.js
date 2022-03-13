import React,{ useState } from 'react';
import styled from './css/ToDoStyles.css';

const ToDo = props => {
    const [newItem, setNewItem] = useState({
            task:"",
            msg:"",
            completed: false
        })

    const onChangeHandler = (event) => {
        event.target.value.length < 4 ? setNewItem({})
    }

    const sumbitNewTask = () => {

    }

    return (
        <div className={ styled.listWrp }>
            <label htmlFor="newTask">New To Do Item:</label>
            <input type="text" name="newTask" onChange = { onChangeHandler } />

            <input type="submit" value="submit" onClick = { sumbitNewTask} />
        </div>
    );
}

export default ToDo;