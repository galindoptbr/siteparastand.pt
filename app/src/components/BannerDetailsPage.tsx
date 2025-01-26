"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../assets/images/banner-1.png";
import banner1Mobile from "../assets/images/banner-mobile.png";

export const BannerDetailsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se a tela é mobile
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Executa no carregamento inicial
    window.addEventListener("resize", handleResize);

    // Cleanup do event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
          <Image
            className="w-full"
            src={isMobile ? banner1Mobile : banner1} // Alterna entre a imagem mobile e desktop
            alt="banner 1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
