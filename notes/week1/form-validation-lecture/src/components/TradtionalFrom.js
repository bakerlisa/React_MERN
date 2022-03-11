import React,{ useState } from 'react';
import styled from './css/TradtionalFormStyles.module.css';


const TradtionalFrom = (props) => {
    const [flavor, setFlavor] = useState("");
    const [flavorError, setFlavorError] = useState("");
    
    const [sauce, setSauce] = useState("");
    const [sauceError, setSauceError] = useState("");

    const [toppings, setToppings] = useState("");
    const [toppingsError, setToppingsError] = useState("");

    const [whippedCreame, setWhippedCreame] = useState(false);

    const flavorHandler = (event) => {
        setFlavor(event.target.value);
        if(event.target.value.length < 5){
            setFlavorError("A flavor needs atleast 5 characters");
        }else{
            setFlavorError("");
        }
    }

    const sauceHandler = (event) => {
        setSauce(event.target.value);
        if(event.target.value.length < 5){
            setSauceError("A sauce needs at least 5 characters")
        }else{
            setSauceError("")
        }
    }

    const toppingsHandler = (event) => {
        setToppings(event.target.value);
        if(event.target.value.langth < 1){
            setToppingsError("No toppings?yu need at least one, this is a Sunday shoppe")
        }else{
            setToppingsError("")
        }
    };

    const submitSundea = (event) => {
        console.log('submit')
        const mySundea = {flavor,sauce,toppings,whippedCreame};
        console.log(mySundea)
    };

    //on blur

    return(
        <div className={styled.container}>
            <div>
                <label htmlFor="Flavor">Flavor: </label>
                <input type="name" name="flavor" value={ flavor }  onChange={ flavorHandler}/>
                <span>flavorError: { flavorError }</span>
            </div>

            <div>
                <label htmlFor="sauce">Sauce: </label>
                <input type="text" name="sauce" value={sauce} onChange={ sauceHandler}/>
                <span>sauceError: { sauceError }</span>
            </div>

            <div>
                <label htmlFor="toppings">Toppings: </label>
                <select name="toppings" value={toppings} onChange={ toppingsHandler}>
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
                <input type="checkbox" name="whippedCream" value={whippedCreame} onChange={(event) => setWhippedCreame(event.target.checked)}/>
            </div>

            <marquee behavior="" direction=""><input type="submit" value="Submit!" onClick={submitSundea} /></marquee>

            <p><strong>Flavor:</strong> {flavor}</p>
            <p><strong>Sauce:</strong> {sauce}</p>
            <p><strong>Toppings:</strong> {toppings}</p>
            <p><strong>Whipped Cream:</strong> {whippedCreame}</p>
        </div>
    );
}

export default TradtionalFrom;