import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import logo from "../assets/logo/calogo.png";
import img from "../assets/img/CA.jpg";
export default function AboutusContemtW() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-green-900 py-20 sm:py-28 font-plus-jakarta-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-white sm:text-4xl mb-6">
            About CA Global Digital
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            CA Global Digital Company Ltd is a multi-division technology and
            creative solutions firm committed to empowering individuals,
            businesses, and institutions through innovation, digital
            transformation, and practical tech skills.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            We specialize in software and marketing solutions for enterprises of
            all sizes, deploying digital innovations to enhance efficiency and
            scalability.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Our vision is to bridge the gap between creativity, education, and
            technology—delivering specialized services that meet the evolving
            needs of today’s digital economy.
          </p>
        </div>

        {/* Right Column - Image/Design */}
        <div
          className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-up"
        >
          <img
            src={img}
            alt="About CA Global Digital"
            className="h-full w-full object-cover bg-no-repeat bg-center "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-transparent" /> */}
        </div>
      </div>
    </section>
  );
}
