import React from 'react';
import classes from './Features.module.css';

function Features() {
    return (
        <div className={classes.features}>
            <div className={classes.feature}>
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590" alt="" />
                <h3>1 YEAR WARRANTY</h3>
            </div>

            <div className={classes.feature}>|</div>

            <div className={classes.feature}>
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612" alt="" />
                <h3>FREE 7 DAYS REPLACEMENT</h3>
            </div>

            <div className={classes.feature}>|</div>

            <div className={classes.feature}>
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576" alt="" />
                <h3>FREE SHIPPING</h3>
            </div>

            <div className={classes.feature}>|</div>

            <div className={classes.feature}>
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627" alt="" />
                <h3>SECURE PAYEMENTS</h3>
            </div>
            
            <div className={classes.feature}>|</div>

            <div className={classes.feature}>
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767" alt="" />
                <h3>GST BILLING</h3>
            </div>
        </div>
    )
}

export default Features;