import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AcademicCapIcon,
  CodeBracketSquareIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";

const divisions = [
  {
    name: "IT Education Division",
    description:
      "Our IT Education arm is dedicated to training the next generation of tech professionals. From beginners to advanced learners, we offer hands-on, industry-relevant courses in programming, web development, and tech career paths—delivered by experienced instructors who are passionate about empowering others.",
    icon: AcademicCapIcon,
  },
  {
    name: "Software Development Division",
    description:
      "We design and build custom software solutions that solve real business problems. From enterprise platforms to mobile applications, our software development team combines deep technical expertise with an agile, user-focused approach to deliver scalable and efficient digital products.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Embedded Systems & Robotics Division",
    description:
      "This division focuses on innovation at the intersection of hardware and software. We provide cutting-edge services in PCB design, embedded system programming, and robotics engineering—ideal for industries seeking intelligent automation and product development.",
    icon: CubeTransparentIcon,
  },
];

export default function OurDivisions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-green-900 py-20 sm:py-32 font-plus-jakarta-sans"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="lg:text-center max-w-3xl mx-auto mb-16">
          <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Our Divisions
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Specialized areas of expertise, each delivering exceptional value
            and innovation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div
              key={division.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-orange-500 text-white shadow-md">
                <division.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {division.name}
              </h3>
              <p className="mt-3 text-sm text-gray-300">
                {division.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
