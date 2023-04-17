import React, { useContext } from 'react';
import classes from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                <button onClick={props.showCart}> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Cart <span>{cartCtx.items.length}</span></button>
            </div>
        </div>
    )
}

export default Nav;