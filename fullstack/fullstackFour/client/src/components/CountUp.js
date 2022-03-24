import axios from 'axios';
import React from 'react';

const CountUp = (props) => {

    const countUp = (i) => {
        setItem([])

        setItem({
            ...bread[i],
            amount: bread[i].amount + 1,
            price: bread[i].price / bread[i].amount + bread[i].price 
        })

        axios.patch(`http://localhost:8000/api/update/product/${bread[i]._id}`,item).then(response=>{
            console.log(response)
            props.onSucessCallback
        }) 
    }

    return(
        <div onClick={ () => {countUp(props.index)} }>Add</div>
    )
}

export default CountUp;