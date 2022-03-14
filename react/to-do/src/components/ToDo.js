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
        blur: false,
        isChecked: false
    })

    const onChangeHandler = (event) => {
        setNewItem({
            ...newItem,
            task: event.target.value,
            valid: event.target.value.length < 3 ? false : true,
        })
    }

    const blur = (event) => {
        setNewItem({
            ...newItem,
            blur: true,
            isChecked: false
        })
    }
    const sumbitNewTask = (event) => {
        event.preventDefault();
        setAllToDos([...allToDos,newItem])
        setNewItem({
            task:"",
            valid: false,
            blur: false,
            isChecked: false
        })
    }

    const clickToRemoveHandler = (i) =>{
        var  copyState = allToDos
        copyState.splice(i,1)
        //had to clear the state?
        setNewItem({})
        setAllToDos(copyState)
    }

    const clickToCompleteHandler = (i) =>{
        const copyAllToDos = [...allToDos]
        copyAllToDos[i].isChecked = !copyAllToDos[i].isChecked
        setAllToDos(copyAllToDos);
    }

    return (
        <div className={ styled.listWrp }>

            <div className={ styled.form }>
                <label className={ styled.label} htmlFor="newTask">New To Do Item:</label>
                <input className={ styled.input} type="text" name="newTask" value={ newItem.task} onChange = { onChangeHandler } onBlur={ blur } />
                {
                    newItem.blur ? newItem.valid ? "" : <span className={ styled.error }>Must be three characters long</span> : ""
                }
                <input type="submit" value="submit" onClick = { sumbitNewTask} className={ styled.submit}/>
            </div>

            <div className="results">
                <h2>Todays List:</h2>
                <div className={ styled.listWrp }>
                    {
                        allToDos < 1 ?
                        <p>To do list is complete </p> :

                        allToDos.map( (item, i) => 

                        <div key={ i } className={ styled.list }>
                            
                            <span className={styled.first} onClick={ () => { clickToCompleteHandler(i) } }>
                                {
                                    item.isChecked ?  <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faSquareFull} />  
                                }
                                { item.isChecked ? <span className={styled.strike}>{ item.task }</span> : <span>{ item.task }</span> }
                                
                            </span> 

                            <span onClick={ (e) => { clickToRemoveHandler(i) } }><FontAwesomeIcon icon={faTrashCan} /></span>

                        </div> )
                    }
                </div>
            </div>

        </div>
    );
}

export default ToDo;