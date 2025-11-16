import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../assets/img/CA.jpg";

export default function AboutusContemtW() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section>
      <div
        className="relative h-[700px] w-full bg-cover bg-no-repeat bg-center lg:mt-22"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#032E15BF]/100"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6 ">
          <h1 className="text-white text-[30px] font-[700] mt-30 lg:mt-0 font-inter">
            About Us
          </h1>

          <p className="text-white text-[16px] max-w-3xl lg:max-w-5xl leading-relaxed font-[400] text-justify lg:text-center font-inter">
            CA Global Digital Company Ltd is a multi-division technology and
            creative solutions firm committed to empowering individuals,
            businesses, and institutions through innovation, digital
            transformation, and practical tech skills. We specialize in software
            and marketing solutions for enterprises of all sizes, deploying
            digital innovations to enhance efficiency and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
