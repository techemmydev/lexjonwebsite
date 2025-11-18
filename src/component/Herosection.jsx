import React from "react";
import img from "../assets/img/aboutusimagesandicons/landingpageimagehero.png";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section>
      {/* Background Image */}
      <div
        className="relative h-[600px] w-full bg-cover bg-no-repeat bg-center lg:mt-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark Tint Overlay */}
        {/* <div className="absolute inset-0 bg-[#0D542B]/0" /> */}

        {/* Green Gradient Overlay */}
        <div
          // className="absolute inset-10"
          style={{
            background:
              "linear-gradient(45deg, #05DF72 0%, #00A63E 70%, #016630 100%)",
            opacity: 0.25,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-30 text-center text-white font-inter lg:mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Transforming Digital Solutions for a Smarter Future
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We build digital experiences that accelerate your business. From
            development to marketing — we do it all.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 cursor-pointer">
            <Link
              to="/contact"
              className="px-6 py-5 bg-[#032E15] rounded-md hover:bg-green-600 transition w-full sm:w-auto text-2xl lg:text-[16px]"
            >
              Get in touch →
            </Link>
            <Link
              to="/#"
              className="px-6 py-5 border border-orange-400 rounded-md hover:bg-white hover:text-green-900 transition w-full sm:w-auto bg-white text-black text-2xl lg:text-[16px]"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
