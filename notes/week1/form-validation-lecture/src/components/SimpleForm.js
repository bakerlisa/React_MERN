import React, {useState} from 'react';
import styled from './css/TradtionalFormStyles.module.css';

const SimpleForm = (props) => {
    const [formStarted,setFormStarted] = useState(false)

    const [form,setForm] = useState({
        flavor:"",
        sauce: "",
        toppings: "",
        whippedCream: false
    })

    const onChangeHandler = (event) => {
        setFormStarted(true)
        console.log(event.target.name + ' : ' + event.target.value)
        setForm({ ...form, 
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    }
    
    const submitSundea = (event) => {
        event.preventDefault();
    };

    const lengthValidator = (input,num) => {
        return input.length >= num ? true :  false
    };

    const allVaild = (inputs) => {
        return lengthValidator(inputs.flavor,4) && lengthValidator(inputs.sauce,4)
    }

    return(
        <div className={styled.container}>
            <h1>Ice Cream!!</h1>
            <div>
                <label htmlFor="Flavor">Flavor: </label>
                <input type="name" name="flavor" onChange={onChangeHandler} />
                { lengthValidator(form.flavor,4) || form.flavor.length === 0 || !formStarted ? "" : <span className={styled.error}>You need at least 4 characters</span> } 
            </div>

            <div>
                <label htmlFor="sauce">Sauce: </label>
                <input type="text" name="sauce"  onChange={onChangeHandler}/>
                { lengthValidator(form.sauce,4) || form.sauce.length === 0 || !formStarted ? "" : <span className={styled.error}>You need at least 4 characters</span> } 
            </div>

            <div>
                <label htmlFor="toppings">Toppings: </label>
                <select name="toppings"  onChange={onChangeHandler}>
                    <option value="Cookie Dough">Cookie Dough</option>
                    <option value="Peanuts">Peanuts</option>
                    <option value="Brownie Bits">Brownie Bits</option>
                    <option value="Bananas">Bananas</option>
                    <option value="Oreo's">Oreo's</option>
                    <option value="Cherries">Cherries</option>
                    <option value="Hot Tamalies">Hot Tamalies</option>
                    <option value="Bubba Bursts">Bubba Bursts</option>
                    <option value="Strawberries">Strawberries</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="whippedCream">Whipped Cream: </label>
                <span className={styled.chkWrp}><input type="checkbox" name="whippedCream"   onChange={onChangeHandler}/></span>
            </div>

            {
                allVaild(form) 
                    ?  <input type="submit" value="Submit!" onClick={submitSundea} className={ styled.submit } />
                    :  <input  disabled type="submit" value="Make My Sundea!" onClick={submitSundea} className={ styled.submit } />
            }

            <p><strong>Flavor:</strong> { form.flavor }</p>
            <p><strong>Sauce:</strong> { form.sauce }</p>
            <p><strong>Toppings:</strong> { form.toppings }</p>
            <p><strong>Whipped Cream:</strong> { form.whippedCream ? "Yes please!" : "No thank you" } </p>
        </div>
    );
}

export default SimpleForm;