import { motion } from "framer-motion";
import img from "../assets/img/Samsung-Galaxy-S20-localhost.png";

export default function EventServices() {
  const content = {
    Gamification: {
      title: "Gamification",
      desc: [
        "Inspire action with rewards through challenges, badges, and achievements.",
        "Turn interactions into habits with fun and rewarding experiences.",
        "Boost loyalty and retention with meaningful incentives.",
        "Drive measurable outcomes tied to conversions, upgrades, and referrals.",
      ],
      img: img,
    },
  };

  return (
    <div className="w-ful py-12 px-6 lg:px-20 font-plus-jakarta-sans">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 lg:mt-10 uppercase lg:leading-14">
        A platform that you need <br className="hidden md:block" />
        for every stage in the user journey
      </h2>

      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-green-600 font-medium mb-2">Engagement</h3>
          <h2 className="text-2xl font-semibold mb-4">
            {content.Gamification.title}
          </h2>
          <ul className="space-y-3 text-gray-600">
            {content.Gamification.desc.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content (Floating Image) */}
        <div className="flex justify-center">
          <motion.img
            src={content.Gamification.img}
            alt={content.Gamification.title}
            className="max-w-full rounded-xl shadow-md"
            animate={{ y: [0, -20, 0] }} // float up and down
            transition={{
              duration: 4, // time for one cycle
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}
