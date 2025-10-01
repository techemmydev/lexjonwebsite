import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import { ReactTyped } from "react-typed";
import ServiceImg from "../assets/img/serviceImg1.png";
import "aos/dist/aos.css";
// import Mission from "../component/Mission";
import CoreValues from "@/component/OurcoreValue";
import "swiper/css";
import "swiper/css/pagination";
// import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Companies from "@/component/Companieslogo";
import WhyChooseUs from "../component/WhyChooseUs";
import TeamSection from "../component/TeamMember";
import { Gem, Target, ThumbsUp } from "lucide-react";
import Stats from "../component/Stats";
import WhyWorkWithUs from "@/component/WhyworkWithus";
import OurDivisions from "@/component/OurDivision";
// import AboutUs from "@/component/AboutusContemt";
import AboutusContemtW from "@/component/AboutusContemt";
// import TeamSection from "../components/TeamSection";

const links = [{ name: "Meet the Team", href: "#" }];

import { Award, Eye } from "lucide-react";

const tabs = [
  {
    label: "Our Edge",
    icon: <Award className="w-6 h-6 mr-2 text-green-800" />,
    content:
      "What makes CA GLOBALS truly stand out is our unwavering commitment to excellence. From planning to execution, we deliver exceptional results with precision, creativity, and care.",
  },
  {
    label: "Mission",
    icon: <Target className="w-6 h-6 mr-2 text-green-800" />,
    content:
      "To deliver world-class digital solutions, education, and creative services that empower people and transform businesses.",
  },
  {
    label: "Vision",
    icon: <Eye className="w-6 h-6 mr-2 text-green-800" />,
    content:
      "To be the leading digital innovation and creative marketing service providers in Africa",
  },
];

const Aboutpage = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const clipboardSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Our Edge");
  const handleScroll = () => {
    if (clipboardSectionRef.current) {
      clipboardSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="font-plus-jakarta-sans sm:px-8 mt-32 lg:mt-16 relative p-5 lg:p-0">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10 lg:p-10">
          <div className="flex flex-col items-center sm:items-start gap-6">
            <h1
              className="text-3xl sm:text-4xl font-bold text-center sm:text-left"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              We Build{" "}
              <ReactTyped
                strings={[
                  "Digital Products.",
                  "Enterprise Platforms.",
                  "Custom Solutions.",
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </h1>

            <p
              className="text-[16px] lg:text-[16px] text-center sm:text-left text-[#88918B] font-light leading-6"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              We specialize in providing software and marketing solutions to
              big, micro, small and medium scale enterprises that are looking to
              deploy digital innovations and techniques as the cornerstone of
              their organization’s operation, for faster and enhanced efficiency
              and scalability.
            </p>
            <div className="  gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleScroll}
                  className="bg-green-800 text-white px-5 py-3 text-sm font-bold hover:bg-green-700  flex items-center justify-center rounded-full  transition-colors duration-300"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>

          <img
            src={ServiceImg}
            alt="Digital Tech Illustration"
            className="w-full sm:w-1/2 max-w-md"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="200"
          />
        </div>
      </section>
      <AboutusContemtW />
      <section
        className="text-center py-16 px-6 bg-white font-plus-jakarta-sans"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-3xl font-bold"> Our Story</h2>
        <p className="text-gray-600 mt-2">
          Learn about our Journey, Mission, and Values that drive us
        </p>

        <div className="flex justify-center mt-10 flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center px-5 py-2 rounded-full border transition-all ${
                activeTab === tab.label
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="mt-10 max-w-3xl mx-auto text-gray-700 text-lg"
          data-aos="fade-up"
        >
          {tabs.find((tab) => tab.label === activeTab)?.content}
        </div>
      </section>
      {/* Company Logos */}
      <div className="w-full bg-green-900 sm:px-8 font-plus-jakarta-sans text-white">
        <Companies />
      </div>

      <Stats />
      <CoreValues />
      {/* <Mission /> */}
      <WhyWorkWithUs />
      <OurDivisions />
      <WhyChooseUs />

      <div ref={clipboardSectionRef} id="clipboardSection">
        <TeamSection />{" "}
      </div>
    </>
  );
};

export default Aboutpage;
