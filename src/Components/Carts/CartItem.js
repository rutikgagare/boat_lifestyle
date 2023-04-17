import React from 'react';
import classes from './CartItem.module.css';

function CartItem(props) {
  return (
    <div className={classes.cartItem}>

      <div className={classes.cartItemImage}>
        <img src={props.url} alt='not found'></img>
      </div>

      <div className={classes.cartItemDescription}>
        <h3>{props.name}</h3>
        <h3>₹ {props.price}</h3>
        <h3>Quantity: {props.quantity}</h3>
      </div>

    </div>
  )
}

export default CartItem