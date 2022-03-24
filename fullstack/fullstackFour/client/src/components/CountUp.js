import axios from 'axios';
import React, { useState } from 'react';

const CountUp = (props) => {

    const [item,setItem] = useState([])

    const countUp = (i) => {
        setItem([])

        setItem({
            ...props.bread[i],
            amount: props.bread[i].amount + 1,
            price: props.bread[i].price / props.bread[i].amount + props.bread[i].price 
        })

        axios.patch(`http://localhost:8000/api/update/product/${props.bread[i]._id}`,item).then(response=>{
            console.log(response)
        }) 

        const copyingBread = props.bread
        copyingBread.splice(i,1,item)
        props.setBread(copyingBread)
    }

    return(
        <div onClick={ () => {countUp(props.index)} }>Add</div>
    )
}

export default CountUp;