// HeroSection.jsx
import React from "react";
import { Link } from "react-router";
import img from "../assets/img/pp.avif";

const Backgrounoverlay = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden mb-14">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Software development background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex items-center">
        <div className="max-w-2xl text-white">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug">
            Building the Future of <br />
            <span className="text-green-400">Software Development</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed">
            We craft scalable, secure, and user-friendly software solutions
            tailored to your business needs. From web applications to enterprise
            platforms, our team helps you innovate faster, reduce costs, and
            stay competitive in the digital era.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4">
            {/* Primary Button (hidden on mobile) */}
            <Link
              to="/services"
              className="hidden sm:inline-block px-8 py-3 text-base sm:text-lg font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/30 hover:from-green-600 hover:to-green-700 transition duration-300 ease-in-out"
            >
              Explore Services
            </Link>

            {/* Secondary Button (always visible) */}
            <Link
              to="/contact"
              className="inline-block px-8 py-3 text-base sm:text-lg font-medium rounded-md text-green-400 border border-green-400 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backgrounoverlay;
