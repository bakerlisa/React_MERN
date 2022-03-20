import React, { useState } from 'react';

const ViewOrders = (props) =>{
    const [singleTopping,setSingleTopping] = useState(props.allOrders.toppings)
    return(
        <div>
            <h2>All Orders</h2>
            <p><strong>Scoops:</strong> {props.allOrders.scoops}</p>
            <p><strong>Flavor:</strong> {props.allOrders.flavor}</p>
            <p><strong>Toppings:</strong> {props.allOrders.toppings }</p>
            <p><strong>Other:</strong> {props.allOrders.other}</p>
        </div>
    )
}

export default ViewOrders;