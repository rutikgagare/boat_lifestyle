import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import img1 from '../../Images/img1.webp';
import img2 from '../../Images/img2.webp';
import img3 from '../../Images/img3.webp';

import smallImg1 from '../../Images/smallImg1.jpg';
import smallImg2 from '../../Images/smallImg2.jpg';
import smallImg3 from '../../Images/smallImg3.jpg';

import { Navigation, Autoplay } from "swiper";
import classes from './MainSlider.module.css';

function MainSlider() {
  return (
    <>

      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={classes.mySwiper}
      >
        <SwiperSlide >
          <div className={classes.slide}>
            <img src={img3} alt="not found" />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={classes.slide}>
            <img src={img2} alt="not found" />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={classes.slide}>
            <img src={img1} alt="not found" />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper 
      navigation={true} 
      modules={[Autoplay,Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className={classes.mySwiper1}
    >
      <SwiperSlide >
        <div className={classes.slide}>
          <img src={smallImg1} alt="not found"/>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className={classes.slide}>
          <img src={smallImg2} alt="not found"/>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className={classes.slide}>
          <img src={smallImg3} alt="not found"/>
        </div>
      </SwiperSlide>
    </Swiper>
    </>

  )
}

export default MainSlider;