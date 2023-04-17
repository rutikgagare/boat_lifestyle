import React, { useState, useEffect } from 'react';
import Product from './Product';
import classes from './ProductSection.module.css';

function ProductSection(props) {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDataHandler() {
      setIsLoading(true);

      const response = await fetch('https://e-commerce-2b1c2-default-rtdb.firebaseio.com/products.json');
      const data = await response.json();

      console.log(data);

      let loadedData = [];

      for (const item in data) {
        loadedData.push(
          {
            id: item,
            name: data[item].name,
            category: data[item].category,
            price: data[item].price,
            url: data[item].url
          });
      };

      setItemList(loadedData);
      setIsLoading(false);
    }

    fetchDataHandler();
  }, []);

  if (isLoading) {
    return (<p className={classes.loading}>Loading......</p>);
  }

  return (
    <div className={classes.productSection}>
      <div className={classes.heading}>
        <h2>Latest Product Section</h2>
      </div>
      <div className={classes.productSection_content}>
        {
          itemList.map((item) => {
            return <Product
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              url={item.url}
            ></Product>
          })
        }
      </div>
    </div>
  )
}

export default ProductSection