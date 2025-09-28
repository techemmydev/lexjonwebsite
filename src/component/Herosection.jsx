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
    <div className=" font-plus-jakarta-sans">
      <div className="relative isolate px-6  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] 
    -translate-x-1/2 rotate-[30deg] 
    bg-gradient-to-tr from-green-400 via-green-600 to-green-800
    opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          className="mx-auto max-w-2xl sm:py-48 lg:py-32 py-20 mt-20"
          data-aos="fade-up"
          data-aos-offset="200"
        >
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
          <p className="mt-6 text-lg text-black-200 text-center">
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
              className="text-sm font-semibold text-black border border-[#faad29d6] px-4 py-2 rounded-lg hover:bg-[#faad29]"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        {/* <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative aspect-1155/678 w-[28rem] 
      -translate-x-1/4 rotate-[25deg] 
      bg-gradient-to-tr from-green-500 via-green-700 to-green-900
      opacity-40 sm:w-[48rem]"
        /> */}
      </div>
    </div>
  );
}
