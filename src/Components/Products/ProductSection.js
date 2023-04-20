import React, { useState, useEffect } from 'react';
import Product from './Product';
import classes from './ProductSection.module.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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

      <Swiper
        className={classes.mySwiper}
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 640px
          600: {
            width: 600,
            slidesPerView: 2,
          },
          800: {
            width: 800,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          1300: {
            width: 1300,
            slidesPerView: 4,
          },
        }}
      >
          {itemList.map((item, index) => (
            <SwiperSlide key={item} virtualIndex={index}>
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                url={item.url}
              ></Product>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSection