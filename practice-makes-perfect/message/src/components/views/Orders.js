import React, { useState } from "react";

const Orders = (props) =>{
   // const [allToppings,setAllToppings] = useState([])

    const [order,setOrder] = useState({
        flavor: "",
        scoops: 0,
        toppings: [],
        other: ""
    })

    const [error,setError] = useState({
        flavor: false,
        scoops: false,
        toppings: false
    })

    const [lengths,setLengths] = useState({
        flavor: 1,
        scoops: 1
    })

    const onChangeHandler = (event) => {
        setOrder({...order,[event.target.name]: event.target.value})
        
        if(event.target.name in error){
            if(event.target.value.length >= lengths[event.target.name]){
                setError({...error,[event.target.name]:true})
            }else{
                setError({...error,[event.target.name]:false})
            }
        }
    }

    // handles validation
    const onCheckboxHandler = (event) => {
        if(event.target.checked === true){
            setOrder({...order,toppings:[...order.toppings,event.target.value]})
            setError({...error,[event.target.name]:true})
        }else{
            // remove the item its it already exists
            if(order.toppings.length <= 0){
                setError({...error,[event.target.name]:false}) 
            }
            var copytoppings = order.toppings
            copytoppings.splice(copytoppings.indexOf(event.target.value))
            setOrder({...order,toppings:order.toppings})
        }

    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

    return(
        <div>
            <h2>Orders</h2> 
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="flavor"><strong>Ice Cream:</strong></label>
                    <select name="flavor" defaultValue="empty" onChange={onChangeHandler}>
                        <option value="empty" disabled>Select Flavor...</option>
                        <option value="choclate">Chcolate</option>
                        <option value="vanilla">Vanilla</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="sorbet">Sorbet</option>
                        <option value="orange cream">OrangeCream</option>
                    </select>

                    {
                        error.flavor === false ? <span>Pick a Flavor</span> : ""
                    }
                </div>

                <div>
                    <label htmlFor="scoops">Scoops:</label>
                    <input type="number" name="scoops" min="0" onChange={onChangeHandler}/>
                    {
                        error.scoops === false ? <span>How many scoops?</span> : ""
                    }
                </div>

                <label htmlFor="toppings"><strong>Toppings:</strong></label>
                <span>
                    <label htmlFor="toppings">sprinkles</label>
                    <input type="checkbox" name="toppings" value="sprinkles" onChange={onCheckboxHandler} />
                </span>

                <span>
                    <label htmlFor="toppings">chocolate syrup</label>
                    <input type="checkbox" name="toppings" value="chocolate_syrup" onChange={onCheckboxHandler}/>
                </span>

                <span>
                    <label htmlFor="toppings">carmel</label>
                    <input type="checkbox" name="toppings" value="carmel" onChange={onCheckboxHandler}/>
                </span>

                <span>
                    <label htmlFor="toppings">whipped cream</label>
                    <input type="checkbox" name="toppings" value="whipped_cream" onChange={onCheckboxHandler}/>
                </span>

                <span>
                    <label htmlFor="toppings">Strawberries</label>
                    <input type="checkbox" name="toppings" value="strawberries" onChange={onCheckboxHandler}/>
                </span>

                <span>
                    <label htmlFor="toppings">hot fudge</label>
                    <input type="checkbox" name="toppings" value="hot_fudge" onChange={onCheckboxHandler}/>
                </span>

                <span>
                    <label htmlFor="toppings">cookie dough</label>
                    <input type="checkbox" name="toppings" value="cookie_dough" onChange={onCheckboxHandler}/>
                </span>
                {
                        error.toppings === false ? <span>Pick at least one topping</span> : ""
                    }

                <div>
                    <label htmlFor="other">Other:</label>
                    <input type="text" name="other" onChange={onChangeHandler}/>
                </div>

                {
                    Object.keys(error).every((item) => error[item]) ? <input type="submit" value="submit" /> : <input type="submit" value="submit" disabled/>
                }
                
            </form> 
        </div>
    )
}

export default Orders;