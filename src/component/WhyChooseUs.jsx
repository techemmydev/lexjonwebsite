import React, { useState } from "react";
import {
  CheckIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/logo/calogo.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-plus-jakarta-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Why Partner With Us
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We're not just building technology—we're building digital ecosystems
            that empower innovation, drive automation, and transform how
            businesses operate in a cloud-first world.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Trusted by Fortune 500 & startups alike",
              "Proven delivery in AI, Cloud & DevOps",
              "Agile-first teams with deep domain expertise",
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-800">
                <CheckIcon className="text-green-900 w-5 h-5 mr-2" />
                {item}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mb-8" ref={ref}>
            <div>
              <p className="text-3xl font-bold text-green-900">
                {inView ? <CountUp end={2000} duration={2} suffix="+" /> : "0"}
              </p>
              <p className="text-gray-600 text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-900">
                {inView ? <CountUp end={30} duration={2} suffix="+" /> : "0"}
              </p>
              <p className="text-gray-600 text-sm">Cloud Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-900">
                {inView ? <CountUp end={98} duration={2} suffix="%" /> : "0"}
              </p>
              <p className="text-gray-600 text-sm">Client Retention</p>
            </div>
          </div>

          {/* Buttons */}
          {/* <div className="flex gap-4 flex-wrap">
            <button className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-md text-sm font-semibold">
              Request Demo
            </button>
            <button className="border border-green-900 text-green-900 hover:bg-green-100 px-6 py-2 rounded-md text-sm font-semibold">
              View Case Studies
            </button>
          </div> */}
        </div>

        {/* Image Section */}
        <div className="relative w-full">
          <img
            src={logo}
            alt="Tech Partnership"
            className="w-full h-auto rounded-md shadow-xl object-cover"
          />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <PlayCircleIcon className="w-16 h-16 text-white opacity-90 hover:opacity-100 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-lg w-full max-w-3xl aspect-video">
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setShowVideo(false)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* YouTube Embed */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
