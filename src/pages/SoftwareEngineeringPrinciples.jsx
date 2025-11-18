import { useEffect } from "react";
import img1 from "../assets/img/Serviceimagess/service1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseDetails from "@/component/CourseDetails";

const SoftwareEngineeringPrinciples = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[500px] md:h-[500px] lg:h-[500px]">
        {/* Background Image with Dark Overlay */}
        <img
          src={img1}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-40"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className=" text-white max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug text-white">
              Software Engineering Principles
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[16px]  text-gray-200 leading-relaxed">
              Master algorithms, data structures, and clean coding practices to
              build scalable and maintainable solutions.
            </p>
          </div>
        </div>
      </div>
      {/* Course Details Section */}
      <CourseDetails
        introTitle="Introduction"
        introDescription="We equip learners and teams to think like engineers, not just coders. Learn the same principles we apply in our client software development projects worldwide."
        sections={[
          {
            title: "What You'll Learn",
            items: [
              "SDLC process and agile methodology",
              "System architecture and UML design",
              "Testing, CI/CD, and deployment pipelines",
            ],
          },
          {
            title: "What We Build",
            items: [
              "Enterprise software solutions",
              "Project management tools",
              "Client-specific system architectures",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Practical engineering experience",
              "Exposure to real client workflows",
              "Career and team collaboration training",
            ],
          },
        ]}
        ctaText="Ready to upgrade your digital skills or partner with us for your next project?"
        ctaLink="/contact"
      />
    </>
  );
};

export default SoftwareEngineeringPrinciples;
