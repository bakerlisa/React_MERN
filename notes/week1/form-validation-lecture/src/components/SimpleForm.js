import React, {useState} from 'react';
import styled from './css/TradtionalFormStyles.module.css';

const SimpleForm = (props) => {
    const [form,setForm] = useState({
        flavor:"",
        sauce: "",
        toppings: "",
        whippedCream: false
    })

    const onChangeHandler = (event) => {
        console.log(event.target.name + ' : ' + event.target.value)
        setForm({ ...form, 
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    }

    return(
        <div className={styled.container}>
            <div>
                <label htmlFor="Flavor">Flavor: </label>
                <input type="name" name="flavor" onChange={onChangeHandler} />
            </div>

            <div>
                <label htmlFor="sauce">Sauce: </label>
                <input type="text" name="sauce"   onChange={onChangeHandler}/>
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
                <input type="checkbox" name="whippedCream"   onChange={onChangeHandler}/>
            </div>

            <marquee behavior="" direction=""><input type="submit" value="Submit!" /></marquee>

            <p><strong>Flavor:</strong> { form.flavor }</p>
            <p><strong>Sauce:</strong> { form.sauce }</p>
            <p><strong>Toppings:</strong> { form.toppings }</p>
            <p><strong>Whipped Cream:</strong> { form.whippedCream ? "Yes please!" : "No thank you" } </p>
        </div>
    );
}

export default SimpleForm;