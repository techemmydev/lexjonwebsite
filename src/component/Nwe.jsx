import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/img/Serviceimagess/service1.png";
import img2 from "../assets/img/Serviceimagess/service2.png";
import img3 from "../assets/img/Serviceimagess/service3.png";
import img4 from "../assets/img/Serviceimagess/service4.png";
import img5 from "../assets/img/Serviceimagess/service5.png";
import img6 from "../assets/img/Serviceimagess/service6.png";

// Service data
const services = [
  {
    title: "Full-Stack Development",
    description:
      "Learn modern web, mobile and desktop application development using the latest frameworks, tools and best practices..",
    img: img4,
  },
  {
    title: "Robotics & Automation",
    description:
      "Design and program autonomous robots with sensors, actuators and intelligent decision making systems..",
    img: img3,
  },
  {
    title: "Embedded Systems Programming",
    description:
      "Develop efficient, low level software for micro controllers and IOT devices to connect the physical and digital worlds..",
    img: img6,
  },
  {
    title: "Software Engineering Principles",
    description:
      "Master algorithms, data structures, and clean coding practices to build scalable and maintainable solutions.",
    img: img1,
  },
  {
    title: "Digital Literacy & IT Foundations",
    description:
      "Gain a strong foundation in information technology, networks, and essential digital skills for today’s workforce.",
    img: img2,
  },
  {
    title: "Hands-on Project Learning",
    description:
      "Apply knowledge directly through capstone projects, hackathons, and real world problem solving challenges.",
    img: img5,
  },
];

const EventServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(
    Array(services.length).fill(false)
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Auto-play every 6s
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 font-inter overflow-hidden bg-green-950">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white"
          data-aos="fade-down"
        >
          DISCOVER OUR DIGITAL SERVICES
        </h2>
        <p
          className="text-white mb-8 text-center text-sm sm:text-base"
          data-aos="fade-up"
        >
          We offer hands-on, future-ready education in IT, software development,
          and robotics for all learners.
        </p>

        {/* Carousel */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Left Text */}
              <div className="text-center lg:text-left px-2 sm:px-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                  {services[activeIndex].title}
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {services[activeIndex].description}
                </p>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src={services[activeIndex].img}
                  alt={services[activeIndex].title}
                  className={`rounded-lg w-full max-w-md object-contain shadow-lg transition-opacity duration-700 ${
                    loadedImages[activeIndex] ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(activeIndex)}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Buttons */}
          <div className="absolute -bottom-4 left-5 lg:flex items-center hidden">
            <button
              onClick={handlePrev}
              className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Next Button */}
          <div className="absolute -bottom-4 right-5 lg:flex items-center hidden">
            <button
              onClick={handleNext}
              className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                activeIndex === index
                  ? "bg-yellow-500"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServices;
