import React,{ useState } from 'react';
import styled from './css/ToDoStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {  faTrashCan } from '@fortawesome/free-solid-svg-icons'



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
        setNewItem({
            task:"",
            valid: false,
            showValid: false
        })
    }

    const clickToCompleteHandler = (e,i) =>{
        console.log(e)
        console.log(i)
        console.log("jellp")
    }

    return (
        <div className={ styled.listWrp }>

            <div className={ styled.form }>
                <label className={ styled.label} htmlFor="newTask">New To Do Item:</label>
                <input className={ styled.input} type="text" name="newTask" value={ newItem.task} onChange = { onChangeHandler } onBlur={ showValid } />
                {
                    newItem.showValid ? newItem.valid ? "" : <span className={ styled.error }>Must be three characters long</span> : ""
                }
                <input type="submit" value="submit" onClick = { sumbitNewTask} className={ styled.submit}/>
            </div>

            <div className="results">
                <h2>Todays List:</h2>
                <ul className={ styled.listWrp }>
                    {
                        allToDos.map( (item, i) => 
                            <li key={ i } className={ styled.list }><FontAwesomeIcon icon={faSquareFull} onClick={ () = (e,i) => {clickToCompleteHandler} }/> { item.task }</li> )
                    }
                </ul>
            </div>

        </div>
    );
}

export default ToDo;