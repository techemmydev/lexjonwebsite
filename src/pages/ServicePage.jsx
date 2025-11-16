import { useEffect } from "react";
import img from "../assets/img/Serviceimagess/heroservice.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesSection from "@/component/Ourservice";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[650px] md:h-[600px] lg:h-[650px] font-inter">
        {/* Background Image with Dark Overlay */}
        <img
          src={img}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center "
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-2xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug">
              Service
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed">
              Explore our range of professional tech and digital training
              programs.
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
    </>
  );
};

export default ServicePage;
