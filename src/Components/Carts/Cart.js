import React, { useContext } from 'react';
import Modal from '../UI/Modal.js';
import classes from './Cart.module.css';
import cartContext from '../../store/cart-context.js';
import CartItem from './CartItem.js';

function Cart(props) {
  const cartCtx = useContext(cartContext);

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <div className={classes.cartItem}>
          {cartCtx.items.map((item) => {
            return (
              <CartItem key={item.id} id={item.id} name={item.name} price={item.price} url={item.url} quantity={item.quantity}></CartItem>
            )
          })}
        </div>

        <div className={classes.totalAmount}>
          <h3>Total Amount : Rs. {cartCtx.totalAmount} </h3>
        </div>

        <div className={classes.cartButtons}>
          <button onClick={props.onClose}>Close</button>
          <button>Order</button>
        </div>

      </div>
    </Modal>
  )
};

export default Cart;