import React, { useContext } from 'react';
import classes from './Nav.module.css';
import cartContext from '../../store/cart-context';

function Nav(props) {
    const cartCtx = useContext(cartContext);
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>
                <h2>E-Commerce</h2>
            </div>
            <div className={classes.navbar}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Trending</li>
                </ul>
            </div>
            <div className={classes.cartButton}>
                <button onClick={props.showCart}>Cart <span>{cartCtx.items.length}</span></button>
            </div>
        </div>
    )
}

export default Nav;