import { useEffect } from "react";
import img5 from "../assets/img/Serviceimagess/service5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseDetails from "@/component/CourseDetails";

const DigitalLiteracyITFoundations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-14 h-[500px] md:h-[500px] lg:h-[500px]">
        {/* Background Image with Dark Overlay */}
        <img
          src={img5}
          alt="Software development background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#032E15BF] opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className=" text-white max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-snug text-white">
              Digital Literacy & IT Foundations
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[16px]  text-gray-200 leading-relaxed">
              Gain a strong foundation in information technology, networks, and
              essential digital skills for today’s workforce.
            </p>
          </div>
        </div>
      </div>
      {/* Course Details Section */}
      <CourseDetails
        introTitle="Introduction"
        introDescription="We help individuals and organizations build strong IT foundations and we support businesses with digital adoption tools built by our software team."
        sections={[
          {
            title: "What You'll Learn",
            items: [
              "Computer basics and internet safety",
              "Microsoft Office and productivity tools",
              "Cloud storage and digital collaboration",
            ],
          },
          {
            title: "What We Build",
            items: [
              "Digital onboarding and e-learning systems",
              "Business process automation tools",
              "Educational portals for organizations",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Beginner friendly training",
              "Certificate of digital competence",
              "Access to online learning community",
            ],
          },
        ]}
        ctaText="Ready to upgrade your digital skills or partner with us for your next project?"
        ctaLink="#contact"
      />
    </>
  );
};

export default DigitalLiteracyITFoundations;
