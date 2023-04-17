import React from 'react';
import classes from './CartItem.module.css';

function CartItem(props) {
  return (
    <div className={classes.cartItem}>
        <img src={props.url} alt='not found'></img>
        <h3>Product Name: {props.name}</h3>
        <h3>Price: Rs.{props.price}</h3>
        <h3>Quantity: {props.quantity}</h3>
        <hr />
    </div>
  )
}

export default CartItem