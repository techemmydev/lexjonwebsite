// import { Cpu, Cloud, ShieldCheck } from "lucide-react";
import img from "../assets/img/aboutusimagesandicons/GroupCALOGO.png";
import mission from "../assets/img/aboutusimagesandicons/mission.svg";
import ouredge from "../assets/img/aboutusimagesandicons/ouredge.svg";
import ourvision from "../assets/img/aboutusimagesandicons/ourvision.svg";
export default function Features() {
  const features = [
    {
      title: "Our Edge",
      description:
        "Our edge lies in blending innovation, digital transformation, and practical technology skills to deliver scalable solutions..",
      icon: (
        <img src={ouredge} alt="Our Edge" className="w-8 h-8 text-green-400" />
      ),
    },
    {
      title: "Our Mission",
      description:
        "To empower individuals, businesses, and institutions through cutting edge technology and creative innovation enhancing efficiency, productivity, and impact in a digitally connected world..",
      icon: (
        <img
          src={mission}
          alt="Our Mission"
          className="w-8 h-8 text-green-400"
        />
      ),
    },
    {
      title: "Our Vision",
      description:
        "To become Africa’s leading force in digital transformation driving inclusive growth and redefining how enterprises of all sizes harness technology for success and scalability..",
      icon: (
        <img
          src={ourvision}
          alt="Our Vision"
          className="w-8 h-8 text-green-400"
        />
      ),
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 py-12  font-inter flex-col items-center">
      <div className="mb-10">
        <img src={img} alt="" width={600} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 flex flex-col items-center text-center 
             transition-transform hover:scale-105 bg-[#016630] 
             shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            {/* Icon Box */}
            <div className="bg-green-700 p-3 rounded-lg shadow-md mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-[700] text-white">{feature.title}</h3>

            {/* Description */}
            <p className="mt-3 text-white  leading-relaxed lg:text-[13px] font-[300]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
