import { useEffect } from "react";
import img3 from "../assets/img/Serviceimagess/service3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseDetails from "@/component/CourseDetails";

const RoboticsAutomation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[500px] md:h-[500px] lg:h-[500px]">
        {/* Background Image with Dark Overlay */}
        <img
          src={img3}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-40"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className=" text-white max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug text-[#032E15]">
              Robotics & Automation
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[16px]  text-gray-200 leading-relaxed">
              Design and program autonomous robots with sensors, actuators and
              intelligent decision making systems.
            </p>
          </div>
        </div>
      </div>
      {/* Course Details Section */}
      <CourseDetails
        introTitle="Introduction"
        introDescription="We train and build automation systems that transform industries. Our Robotics program equips learners and businesses to design and implement smart, automated solutions for manufacturing, logistics, and beyond."
        sections={[
          {
            title: "What You'll Learn",
            items: [
              "Robotics programming and Arduino",
              "Motor control, sensors, and automation logic",
              "IoT integration and embedded connectivity",
            ],
          },
          {
            title: "What We Build",
            items: [
              "Custom robotic prototypes",
              "Automated production systems",
              "IoT and remote monitoring tools",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Industry ready skills",
              "Automated production systemsn",
              "IoT and remote monitoring tools",
            ],
          },
        ]}
        ctaText="Ready to upgrade your digital skills or partner with us for your next project?"
        ctaLink="#contact"
      />
    </>
  );
};

export default RoboticsAutomation;
