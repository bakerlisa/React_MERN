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

    const [tempItem, setTempItem] = useState({
        task:"",
        valid: true,
        blur: true,
        isChecked: true
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

    const clickToRemoveHandler = (e,i,item) =>{
        var  copyState = allToDos
        copyState.splice(i,1)
        //had to clear the state?
        setNewItem({
            task:"",
            valid: false,
            blur: false,
            isChecked: false
        })
        setAllToDos(copyState)
    }

    const clickToCompleteHandler = (e,i,item) =>{
        if(allToDos[i].isChecked === false){
            setTempItem({
                task:item.task,
                valid: true,
                blur: true,
                isChecked: true
            })

            var copyState = allToDos
            // copyState.isChecked.splice(copyState.isChecked.indexOf(e.target.value),1,true)
            // copyState.splice(copyState.indexOf(i),1,tempItem)
            copyState.splice(i,1,tempItem)
            setAllToDos( copyState )
        }
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
                            
                            <span className={styled.first} onClick={ (e) => { clickToCompleteHandler(e,i,item) } }>
                                {
                                    item.isChecked ?  <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faSquareFull} />  
                                }
                                { item.isChecked ? <span className={styled.strike}>{ item.task }</span> : <span>{ item.task }</span> }
                                
                            </span> 

                            <span onClick={ (e) => { clickToRemoveHandler(e,i,item) } }><FontAwesomeIcon icon={faTrashCan} /></span>

                        </div> )
                    }
                </div>
            </div>

        </div>
    );
}

export default ToDo;