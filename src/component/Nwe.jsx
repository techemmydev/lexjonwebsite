import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import Software from "../assets/img/ware.avif";
import digital from "../assets/img/edu.avif";
import robotics from "../assets/img/think.png";

// Service data
const services = [
  {
    title: "Software Development",
    description:
      "Master the art of coding through a structured journey into programming, algorithms, and software engineering best practices. Students will learn to design and build scalable applications that solve real-world problems while applying clean code principles. This program equips learners with the technical and analytical skills required to thrive in today’s fast-paced software industry.",
    img: Software,
    link: "/SoftwareDevelopment",
  },
  {
    title: "IT Education (R&C)",
    description:
      "Gain practical, hands-on experience in web, mobile, and desktop application development using modern frameworks and technologies. With a focus on research and collaboration, students are encouraged to experiment, innovate, and build solutions that address real-life challenges. This track ensures learners are job-ready with strong fundamentals and industry-relevant skills.",
    img: digital,
    link: "/creative",
  },
  {
    title: "Embedded Systems & Robotics",
    description:
      "Step into the world of intelligent machines by learning how hardware and software come together in robotics and automation. Students will work with sensors, microcontrollers, and AI-driven systems to design innovative solutions that bring ideas to life. This program fosters creativity, problem-solving, and prepares future engineers for the rapidly evolving field of robotics and IoT.",
    img: robotics,
    link: "/robotics",
  },
];

const EventServices = () => {
  const navigate = useNavigate();
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
    <section className="py-12 px-4 sm:px-6 lg:px-10 font-plus-jakarta-sans overflow-hidden bg-green-950">
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
                <Button
                  onClick={() => navigate(services[activeIndex].link)}
                  className="bg-[#faad29d6] text-white px-5 py-3 text-sm font-bold hover:bg-[#b37b1e] capitalize"
                >
                  learn more
                </Button>
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
          <div className="absolute inset-y-0 left-0 lg:flex items-center hidden">
            <button
              onClick={handlePrev}
              className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 ml-2 sm:ml-4"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 lg:flex items-center hidden ">
            <button
              onClick={handleNext}
              className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 mr-2 sm:mr-4"
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
