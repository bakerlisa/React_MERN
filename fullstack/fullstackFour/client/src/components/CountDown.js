import axios from 'axios';
import React from 'react';


const CountDown = (props) => {
    
        const countDown = (i) => {
            setItem([])
            
            const copyBreadState = bread[i]
            var breadPrice = 0;
            var breadAmount = 0;
    
            if( bcopyBreadState.price - (copyBreadState.price / copyBreadState.amount) > 0){
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
                props.onSucessCallback
            })
        }

        return( 
            <div onClick={() => {countDown(props.indx)} }>Down</div>
        )
}

export default CountDown;