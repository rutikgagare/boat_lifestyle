import React from 'react';
import Product from './Product';
import classes from './ProductSection.module.css';

function productSection(props) {
  return (
    <div className={classes.productSection}>
      <div className={classes.heading}>
        <h2>Product Section</h2>
      </div>
      
      <div className={classes.productSection_content}>
      {
        props.items.map((item) => {
          return <Product
            key={item.id}
            name = {item.name}
            category = {item.category}
            price = {item.price}
            url = {item.url}
          ></Product>
        })
      }
      </div>
     
    </div>
  )
}

export default productSection