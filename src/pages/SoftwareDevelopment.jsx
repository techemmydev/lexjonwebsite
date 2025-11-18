import { useEffect } from "react";
import img from "../assets/img/Serviceimagess/service4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseDetails from "@/component/CourseDetails";

const SoftwareDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[500px] md:h-[500px] lg:h-[500px]">
        {/* Background Image with Dark Overlay */}
        <img
          src={img}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className=" text-white max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug">
              Full Stack Development
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[16px]  text-gray-200 leading-relaxed">
              Learn modern web, mobile and desktop application development using
              the latest frameworks, tools and best practices
            </p>
          </div>
        </div>
      </div>
      {/* Course Details Section */}
      <CourseDetails
        introTitle="Introduction"
        introDescription="At CA Global Digital, we don't just teach — we build. Learn full-stack development with React, Node.js, and MongoDB through real projects and industry-standard practices."
        sections={[
          {
            title: "What You'll Learn",
            items: [
              "HTML, CSS, JavaScript",
              "React and Next.js",
              "Node.js and Express",
              "MongoDB, APIs, Authentication",
              "Deployment and GitHub",
            ],
          },
          {
            title: "What We Build",
            items: [
              "Business websites and dashboards",
              "E-commerce systems",
              "Internal workflow automation apps",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Hands-on project-based learning",
              "Mentorship and certification",
              "Career and portfolio support",
            ],
          },
        ]}
        ctaText="Ready to upgrade your digital skills or partner with us for your next project?"
        ctaLink="/contact"
      />
    </>
  );
};

export default SoftwareDevelopment;
