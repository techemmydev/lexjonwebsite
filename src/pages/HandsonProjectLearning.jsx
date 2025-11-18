import { useEffect } from "react";
import img2 from "../assets/img/Serviceimagess/service2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseDetails from "@/component/CourseDetails";

const HandsonProjectLearning = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[500px] md:h-[500px] lg:h-[500px]">
        {/* Background Image with Dark Overlay */}
        <img
          src={img2}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className=" text-white max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug text-white">
              Hands-on Project Learning
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[16px]  text-gray-200 leading-relaxed">
              Apply knowledge directly through capstone projects, hackathons,
              and real world problem solving challenges.
            </p>
          </div>
        </div>
      </div>
      {/* Course Details Section */}
      <CourseDetails
        introTitle="Introduction"
        introDescription="We don’t just teach theory we integrate you into  real software projects. Work on live systems alongside our engineers and gain professional exposure.."
        sections={[
          {
            title: "What You'll Learn",
            items: [
              "Team collaboration and version control",
              "Agile sprints and product delivery",
              "Code reviews and testing best practices",
            ],
          },
          {
            title: "What We Build",
            items: [
              "Client driven applications",
              "Prototype and MVP systems",
              "Open-source contributions",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Real project participation",
              "Career portfolio development",
              "Direct industry mentorship",
            ],
          },
        ]}
        ctaText="Ready to upgrade your digital skills or partner with us for your next project?"
        ctaLink="/contact"
      />
    </>
  );
};

export default HandsonProjectLearning;
