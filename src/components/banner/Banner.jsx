import React from "react";
import bannerImgs from "../../data/bannerImgList";
import SwiperSlideShow from "../swiper/Swiper";
import BannerCard from "./BannerCard";

Banner.propTypes = {};

function Banner() {
  return (
    <>
      <SwiperSlideShow>
        {bannerImgs.map((img, idx) => (
          <BannerCard key={idx} img={img} />
        ))}
      </SwiperSlideShow>
    </>
  );
}

export default Banner;
