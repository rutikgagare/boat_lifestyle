import React from 'react';
import classes from './CartItem.module.css';

function CartItem(props) {
  return (
    <div className={classes.cartItem}>
        <img src={props.url}></img>
        <h3>Product Name: {props.name}</h3>
        <h3>Price: {props.price}</h3>
        <hr />
    </div>
  )
}

export default CartItem