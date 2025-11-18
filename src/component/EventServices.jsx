import React from "react";
import { Cpu, Cloud, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "New Technology",
      description:
        "Harness cutting-edge innovation to stay ahead of the curve with solutions built for the future.",
      icon: <Cpu className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Easy Integration",
      description:
        "Seamlessly integrate our platform into your workflow with minimal setup and maximum efficiency.",
      icon: <Cloud className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Better Reliability",
      description:
        "Experience unmatched stability and performance, ensuring your systems run smoothly 24/7.",
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 py-12 font-inter">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6
        max-w-6xl w-full
        bg-[#0D542B] backdrop-blur-[64px] border border-[#032E15]/20
        p-6 rounded-2xl shadow-xl"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 bg-green-800"
          >
            {/* Icon Box */}
            <div className="bg-green-700 p-3 rounded-lg shadow-md mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>

            {/* Description */}
            <p className="mt-3 text-gray-200 text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
