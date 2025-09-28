import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CpuChipIcon,
  CloudIcon,
  LockClosedIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Full-Stack Development",
    description:
      "Learn modern web, mobile, and desktop application development using the latest frameworks, tools, and best practices.",
    icon: CpuChipIcon,
  },

  {
    name: "Robotics & Automation",
    description:
      "Design and program autonomous robots with sensors, actuators, and intelligent decision-making systems.",
    icon: CloudIcon,
  },
  {
    name: "Embedded Systems Programming",
    description:
      "Develop efficient, low-level software for microcontrollers and IoT devices to connect the physical and digital worlds.",
    icon: LockClosedIcon,
  },
  {
    name: "Software Engineering Principles",
    description:
      "Master algorithms, data structures, and clean coding practices to build scalable and maintainable solutions.",
    icon: CpuChipIcon,
  },
  {
    name: "Digital Literacy & IT Foundations",
    description:
      "Gain a strong foundation in information technology, networks, and essential digital skills for today’s workforce.",
    icon: ChartBarIcon,
  },

  {
    name: "Hands-On Project Learning",
    description:
      "Apply knowledge directly through capstone projects, hackathons, and real-world problem-solving challenges.",
    icon: LockClosedIcon,
  },
];

export default function Workflow() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-green-900 py-20 sm:py-32" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center font-plus-jakarta-sans">
          <p className="mt-2 text-4xl lg:text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Powering the Future of Digital Innovation
          </p>
          <p className="mt-6 text-lg text-green-100">
            Our platform combines AI, cloud computing, and secure analytics to
            help you move faster, smarter, and safer in a digital-first world.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl font-plus-jakarta-sans">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-500 shadow-md">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-green-100">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
