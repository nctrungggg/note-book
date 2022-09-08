import React, { Children } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Swiper.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

function SwiperSlideShow({ items, children }) {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      lazy
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      speed={3000}
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSlideShow;
