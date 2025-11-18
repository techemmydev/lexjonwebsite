import { useEffect } from "react";
import img6 from "../assets/img/Serviceimagess/service6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseDetails from "@/component/CourseDetails";

const EmbeddedRoboticsLanding = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[500px] md:h-[500px] lg:h-[500px]">
        {/* Background Image with Dark Overlay */}
        <img
          src={img6}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className=" text-white max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug text-white">
              Embedded Systems Programming
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[16px]  text-gray-200 leading-relaxed">
              Develop efficient, low level software for micro controllers and
              IOT devices to connect the physical and digital worlds.
            </p>
          </div>
        </div>
      </div>
      {/* Course Details Section */}
      <CourseDetails
        introTitle="Introduction"
        introDescription="We teach how to program the brains of modern devices and we build them too. Learn C, C++, and IoT fundamentals used to develop smart, connected products.."
        sections={[
          {
            title: "What You'll Learn",
            items: [
              "Microcontrollers (Arduino, ESP32)",
              "C/C++ programming for hardware",
              "Sensor integration and IoT protocols",
            ],
          },
          {
            title: "What We Build",
            items: [
              "Smart home and IoT devices",
              "Data acquisition boards",
              "Sensor-based automation systems",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Real hardware labs",
              "Firmware + IoT integration experience",
              "Collaborative projects with clients",
            ],
          },
        ]}
        ctaText="Ready to upgrade your digital skills or partner with us for your next project?"
        ctaLink="#contact"
      />
    </>
  );
};

export default EmbeddedRoboticsLanding;
