import React, { useContext, useRef } from 'react';
import classes from './Product.module.css';
import cartContext from '../../store/cart-context';


function Product(props) {
  const cartCtx = useContext(cartContext);
  const qtyInputRef = useRef();

  const addToCartHandler = () => {
    console.log(qtyInputRef.current.value);

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      url: props.url,
      price: props.price,
      quantity: qtyInputRef.current.value
    });

    qtyInputRef.current.value = 1;
  }

  return (
    <div className={classes.product}>
      <div className={classes.productImg}>
        <img src={props.url} alt="not found" />
      </div>

      <div className={classes.description}>
        <h3>{props.name}</h3>
        <h4>Price : Rs.{props.price}</h4>
        <hr />
        <h4>Category : {props.category}</h4>
        <span>Quantity : </span> <input ref={qtyInputRef} type='number' placeholder='1' defaultValue={1} id='qty' />
        <div className={classes.cartButton}>
          <button onClick={addToCartHandler}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
};

export default Product;