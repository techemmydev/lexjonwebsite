import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Gem, Target, ThumbsUp } from "lucide-react";

// const tabs = [
//   {
//     label: "Our Edge",
//     icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />,
//     content:
//       "What makes CA GLOBALS truly stand out is our unwavering commitment to excellence. From planning to execution, we deliver exceptional results with precision, creativity, and care.",
//   },
//   {
//     label: "Mission",
//     icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />,
//     content:
//       "To deliver world-class digital solutions, education, and creative services that empower people and transform businesses.",
//   },
//   {
//     label: "Vision",
//     icon: <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />,
//     content:
//       "To be the leading digital innovation and creative marketing service providers in Africa.",
//   },
// ];

const DiscoverOurStory = () => {
  // const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="text-center py-12 px-4 sm:px-6 bg-white font-plus-jakarta-sans"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl font-bold font-plus-jakarta-sans ">
        WHO WE ARE
      </h2>
      <p className="text-gray-600 mt-2 text-base lg:text-[17px] max-w-3xl mx-auto font-plus-jakarta-sans leading-10">
        CA Global Digital Company Ltd is a multi-division technology and
        creative solutions firm committed to empowering individuals, businesses,
        and institutions through innovation, digital transformation, and
        practical tech skills.
      </p>

      {/* Tab Buttons */}
      {/* <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`flex items-center justify-center px-4 sm:px-5 py-2 rounded-full border text-sm sm:text-base transition-all ${
              activeTab === index
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div> */}

      {/* Active Tab Content */}
      {/* <div
        className="flex flex-col items-center mt-8 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <p className="text-gray-600 mt-2 font-light text-sm sm:text-base">
          {tabs[activeTab].content}
        </p>
      </div> */}
    </section>
  );
};

export default DiscoverOurStory;
