import React from 'react'

const Customer = (props) =>{
    return (
        <div>
         <p>{props.id}  {props.id}  {props.name}  {props.quantity}  {props.product_id}  {props.orderId}  {props.orderDate}</p>   
        </div>
    )
}

export default Customer
