import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Mission from "../component/Mission";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import WhyChooseUs from "../component/WhyChooseUs";
import TeamSection from "../component/TeamMember";
import { Gem, Target, ThumbsUp } from "lucide-react";
import Stats from "../component/Stats";
// import TeamSection from "../components/TeamSection";

const links = [{ name: "Meet the Team", href: "#" }];

const stats = [
  { name: "Events Hosted", value: 1200 },
  { name: "Happy Clients", value: 5000 },
  { name: "Years in Service", value: 5 },
  { name: "Venue Capacity", value: 500 },
];
const tabs = [
  {
    label: "Our Edge",
    icon: <Gem className="w-6 h-6 mr-2" />,
    content:
      "What makes CA GLOBALS truly stand out is our unwavering commitment to excellence. From planning to execution, we deliver exceptional results with precision, creativity, and care.",
  },
  {
    label: "Mission",
    icon: <Target className="w-6 h-6 mr-2" />,
    content:
      "We aim to create unforgettable experiences by offering beautiful venues and comprehensive event planning services tailored to our clients' needs. Your satisfaction is our priority.",
  },
  {
    label: "Vision",
    icon: <ThumbsUp className="w-6 h-6 mr-2" />,
    content:
      "We believe in customer satisfaction, quality, integrity, and creativity. These values guide us in every event we host, ensuring a unique and memorable experience for our clients.",
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
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 font-plus-jakarta-sans">
        <img
          alt="Digital technology background"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHRlY2h8ZW58MHx8MHx8fDA%3D"
          className="absolute inset-0 -z-10 size-full  bg-cover bg-center bg-no-repeat "
        />
        <div className="absolute inset-0 bg-black/90 -z-10"></div>{" "}
        {/* Overlay */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 py-6" data-aos="fade-up">
            <h2
              className="text-3xl font-semibold tracking-tight text-white sm:text-7xl lg:text-4xl"
              aos="fade-up"
            >
              Empowering the Future with Tech
            </h2>
            <p
              className="mt-8 text-lg font-medium text-gray-300 sm:text-xl lg:text-[15px]"
              aos="fade-up"
            >
              At Digitech Solutions, we develop cutting-edge software,
              AI-powered platforms, and scalable cloud infrastructure to drive
              innovation and digital transformation for enterprises around the
              world.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={handleScroll}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>

            <dl
              ref={ref}
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex flex-col-reverse gap-1 font-Elsie-swash"
                >
                  <dt className="text-base text-gray-300">{stat.name}</dt>
                  <dd
                    className="text-4xl font-semibold tracking-tight text-white"
                    data-aos="fade-up"
                  >
                    {inView ? (
                      <CountUp end={stat.value} duration={2} suffix="+" />
                    ) : (
                      "0"
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

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
      <Stats />
      <Mission />

      <WhyChooseUs />
      <div ref={clipboardSectionRef} id="clipboardSection">
        <TeamSection />{" "}
      </div>
    </>
  );
};

export default Aboutpage;
