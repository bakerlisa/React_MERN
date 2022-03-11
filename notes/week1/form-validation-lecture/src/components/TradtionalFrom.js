import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import styles from './css/TradtionalFormStyles.module.css';


const TradtionalFrom = (props) => {
    const [flavor, setFlavor] = useState("");
    const [sauce, setSauce] = useState("");
    const [toppings, setToppings] = useState("");
    const [whippedCream, setWhippedCream] = useState("");

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="Flavor">Falvor</label>
                <input type="name" name="flavor" value={sauce} onChange={ (event) => console.log(event) } />
            </div>

            <div>
                <label htmlFor="sauce">Sauce</label>
                <input type="text" name="sauce" />
            </div>

            <div>
                <label htmlFor="toppings">Toppings</label>
                <select name="toppings">
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
                <label htmlFor="whippedCream">Whipped Cream</label>
                <input type="checkbox" name="whippedCream" />
            </div>

            <marquee behavior="" direction=""><input type="submit" value="Submit!" /></marquee>
        </div>
    );
}

export default TradtionalFrom;