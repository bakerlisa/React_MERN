import axios from 'axios';
import React, { useState } from 'react';


const CountDown = (props) => {
    const [item,setItem] = useState([])

        const countDown = (i) => {
            setItem([])
            
            const copyBreadState = props.bread[i]
            var breadPrice = 0;
            var breadAmount = 0;
    
            if( copyBreadState.price - (copyBreadState.price / copyBreadState.amount) > 0){
                breadPrice = copyBreadState.price - (copyBreadState.price / copyBreadState.amount)
            }else{
                breadPrice = copyBreadState.price
            }
    
            if(copyBreadState.amount - 1 > 0){
                breadAmount= copyBreadState.amount - 1 
            }else{
                breadAmount = copyBreadState.amount
            }
    
            setItem({
                ...copyBreadState,
                amount: breadAmount,
                price: breadPrice
            })
    
            axios.patch(`http://localhost:8000/api/update/product/${copyBreadState._id}`,item).then(response=>{
                console.log(response)
            })
        }

        return( 
            <div onClick={() => {countDown(props.indx)} }>Down</div>
        )
}

export default CountDown;