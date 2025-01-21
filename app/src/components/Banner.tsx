"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../assets/images/banner-1.png";

export const Banner = () => {
  return (
    <>
      <div className="mt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image className="w-full" src={banner1} alt="banner 1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
