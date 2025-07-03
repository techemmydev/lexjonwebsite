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
    name: "AI-Powered Efficiency",
    description:
      "Automate tasks and streamline workflows using advanced machine learning and artificial intelligence.",
    icon: CpuChipIcon,
  },
  {
    name: "Cloud Scalability",
    description:
      "Deploy and scale across secure cloud infrastructure without worrying about server limitations.",
    icon: CloudIcon,
  },
  {
    name: "Enterprise-Grade Security",
    description:
      "Your data is protected with top-tier encryption, firewalls, and 24/7 monitoring.",
    icon: LockClosedIcon,
  },
  {
    name: "Real-Time Analytics",
    description:
      "Gain instant insights with live dashboards and performance metrics that drive smarter decisions.",
    icon: ChartBarIcon,
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
