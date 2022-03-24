import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CountUp = (props) => {
    const arrIndx = props.indx;
    const [item,setItem] = useState([])
    const [id,setID] = useState(props.bread[arrIndx]._id)

    const countUp = () => {
        setItem({
            ...props.bread[arrIndx],
            amount: props.bread[arrIndx].amount + 1,
        })
    }

    useEffect(() => {
        axios.patch(`http://localhost:8000/api/update/product/${id}`,item).then(response=>{
            console.log(response)
        })
    }, [item.amount]); 

    

    return(
        <div onClick={countUp}>Add</div>
    )
}

export default CountUp;