import React,{useContext} from 'react';
import classes from './Product.module.css';
import cartContext from '../../store/cart-context';

function Product(props) {
  const cartCtx = useContext(cartContext);

  const addToCartHandler = () =>{
    cartCtx.addItem({
      name:props.name,
      url:props.url,
      price:props.price
    });
  }
  
  return (
    <div className={classes.product}>
      <div className={classes.productImg}>
        <img src={props.url} alt="" />
      </div>

      <div className={classes.description}>
        <h3>{props.name}</h3>
        <h4>Category : {props.category}</h4>
        <h4>Price : {props.price}</h4>
      </div>

      <div className={classes.cartButton}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  )
};

export default Product;