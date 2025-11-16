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
import AboutusContemtW from "@/component/AboutusHerosection";
// import TeamSection from "../components/TeamSection";

const links = [{ name: "Meet the Team", href: "#" }];

import { Award, Eye } from "lucide-react";
import Features from "@/component/Features";
import Companieslogo from "@/component/Companieslogo";
import FaqSection from "@/component/FAQ";
import OurExpertise from "@/component/OurExpertise";
import TeamMember from "../component/TeamMember";

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
      <AboutusContemtW />
      <Features />
      <Companieslogo />
      <WhyWorkWithUs />
      <FaqSection />
      <TeamMember />
    </>
  );
};

export default Aboutpage;
