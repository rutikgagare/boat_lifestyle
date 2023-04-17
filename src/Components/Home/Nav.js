import React, { useContext } from 'react';
import classes from './Nav.module.css';
import cartContext from '../../store/cart-context';
import logo from './boat_logo_small.avif';


function Nav(props) {
    const cartCtx = useContext(cartContext);
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={classes.navbar}>
                <ul>
                    <li>Categories</li>
                    <li>Daily Deals</li>
                    <li>Gift With Boat</li>
                    <li>More</li>
                </ul>
            </div>
            <div className={classes.cartButton}>
                <button onClick={props.showCart}>Cart <span>{cartCtx.items.length}</span></button>
            </div>
        </div>
    )
}

export default Nav;