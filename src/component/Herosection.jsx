import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroimage from "../assets/logo/Heroimage.jpg";
import Button from "./Button";
import { ReactTyped } from "react-typed";
import { Link } from "react-router";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="pt-32 lg:p-30 bg-cover bg-center bg-no-repeat font-plus-jakarta-sans relative"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="relative z-10 px-6 text-center text-white py-20 max-w-3xl mx-auto">
        <ReactTyped
          strings={[
            "Transforming Digital Solutions for a Smarter Future",
            "Empowering Businesses Through Innovation",
            "Driving Growth with Next-Gen Technologies",
          ]}
          typeSpeed={50}
          backSpeed={50}
          backDelay={2000}
          loop
          showCursor
          cursorChar="|"
          className="text-2xl md:text-4xl font-bold leading-tight"
        />
        <p className="mt-6 text-lg text-gray-200">
          We build digital experiences that accelerate your business. From
          development to marketing — we do it all.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-[#faad29d6] text-white px-5 py-3 text-sm font-bold hover:bg-[#b37b1e]">
              Get in touch
            </Button>
          </Link>
          <Link
            to="/aboutus"
            className="text-sm font-semibold text-white border border-[#faad29d6] px-4 py-2 rounded-lg hover:bg-[#faad29]"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
