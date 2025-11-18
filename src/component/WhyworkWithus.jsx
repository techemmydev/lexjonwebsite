import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  UsersIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

const whyWorkWithUs = [
  {
    name: "Excellent Delivery",
    description:
      "Having studied and understood different industries and sectors of the business world, we approach every client with excellence, prioritizing them as kings not because they pay us but because we hold ourselves to a higher standard in service.",
    icon: SparklesIcon,
  },
  {
    name: "Dedication",
    description:
      "We do a little extra to exceed expectations of our clients, continually improving ourselves, our products, and our services with an unprecedented approach to operations.",
    icon: HeartIcon,
  },
  {
    name: "Brand Promise",
    description:
      "Experience professionalism, excellent service, control, and convenience like never before.",
    icon: LightBulbIcon,
  },
  {
    name: "Integrity",
    description:
      "Our reputation as a company that clients can trust is our most valuable asset. We continually earn that trust by fulfilling all our promises.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Great Team",
    description:
      "We believe that what’s worth doing is worth doing well, so we hire professionals in every department to ensure our clients get maximum value.",
    icon: UsersIcon,
  },
  {
    name: "Unique Selling Proposition",
    description:
      "If you have a great plan for your business in terms of technology integration, then working with CA Global Digital Company is a must. We offer unmatched digital innovation and solutions to boost productivity.",
    icon: SparklesIcon,
  },
];

export default function WhyWorkWithUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#032E15] py-20 sm:py-32 font-inter" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="lg:text-center max-w-3xl mx-auto mb-16 font-plus-jakarta-sans">
          <p className="text-4xl font-semibold tracking-tight text-white sm:text-4xl">
            Why Work With Us
          </p>
          <p className="mt-4 text-lg text-white font-[300]">
            Discover the values, principles, and expertise that make CA Global
            Digital Company your ideal technology partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithUs.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-black shadow-md">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#000000]">
                {item.name}
              </h3>
              <p className="mt-3 text-base text-[#88918B] font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
