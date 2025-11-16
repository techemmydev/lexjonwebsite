/* eslint-disable react/prop-types */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import group1 from "../assets/img/Group 5.svg";
import group2 from "../assets/img/Group 6.svg";
import group3 from "../assets/img/Group 7.svg";
import group8 from "../assets/img/Group 8.svg";
import group9 from "../assets/img/Vector.svg";

const ArrayOfLogos = [
  { img: group1 },
  { img: group2 },
  { img: group3 },
  { img: group8 },
  { img: group9 },
];

const Companieslogo = () => {
  return (
    <div className="w-full mx-auto px-4 lg:p-10 sm:px-0 font-inter">
      {/* Text Block */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl sm:text-3xl font-bold leading-8 sm:leading-10 py-3 sm:py-5 capitalize">
          Trusted by 2000+ Companies
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-24 ">
        {/* Logo Carousel */}
        <div className="w-full sm:w-[700px] min-h-[100px] sm:min-h-[120px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mt-6 sm:mt-10"
          >
            {ArrayOfLogos.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="w-[120px] sm:w-[150px] h-[60px] sm:h-[75px] flex items-center justify-center shadow-md bg-white rounded mb-15 sm:mb-10">
                  <img
                    src={item.img}
                    alt={`Logo ${index + 1}`}
                    className="w-[80px] sm:w-[100px] object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Companieslogo;
