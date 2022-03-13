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

    const lengthValidator = (input,num) => {
        return input.length >= num ? true :  false
    };

    const allVaild = (inputs) => {
        return lengthValidator(inputs.flavor,4) && lengthValidator(inputs.sauce,4)
    }

    const sumbitNewTask = () => {

    }

    return (
        <div className={ styled.listWrp }>
            <label htmlFor="newTask">New To Do Item:</label>
            <input type="text" name="newTask" onChange = { onChangeHandler } />
            {
                allVaild(form) ?
                <input type="submit" value="submit" onClick = { sumbitNewTask} />
                :  <input type="submit" value="submit" onClick = { sumbitNewTask} disabled/>
            }
        </div>
    );
}

export default ToDo;