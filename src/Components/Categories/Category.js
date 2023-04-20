import React from 'react';
import classes from "./Category.module.css";

function Category(props) {
  return (
    <div className={classes.category}>
      <div className={classes.category_desc}>
        <h4>{props.name}</h4>
      </div>
      <div className={classes.category_img}>
        <img src={props.url} alt="not found" /> 
      </div>
    </div>
  );
}

export default Category;