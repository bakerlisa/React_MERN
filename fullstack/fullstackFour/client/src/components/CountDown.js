import axios from 'axios';
import React, { useEffect, useState } from 'react';


const CountDown = (props) => {
    const arrIndx = props.indx;
    const [item,setItem] = useState([])
    const [id,setID] = useState(props.bread[arrIndx]._id)

    const countDown = () => {
        setItem({
            ...props.bread[arrIndx],
            amount: props.bread[arrIndx].amount - 1 > 0  ? props.bread[arrIndx].amount - 1  : props.bread[arrIndx].amount
        })
    }
    
    useEffect(() => {
        axios.patch(`http://localhost:8000/api/update/product/${id}`,item).then(response=>{
            console.log(response)
        })
    }, [item.amount]); 

    return( 
        <div onClick={countDown}>Down</div>
    )
}

export default CountDown;