import React from "react";
import img from "../assets/img/aboutusimagesandicons/landingpageimagehero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      {/* Dark Tint Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Green Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(45deg, #05DF72 0%, #00A63E 30%, #016630 100%)",
          opacity: 0.25,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white font-inter">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Transforming Digital Solutions for a Smarter Future
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          We build digital experiences that accelerate your business. From
          development to marketing — we do it all.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <a className="px-6 py-3 bg-green-700 rounded-md hover:bg-green-600 transition w-full sm:w-auto">
            Get in touch →
          </a>
          <a className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-green-900 transition w-full sm:w-auto">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
