import React, { useState, useEffect } from "react";
import heroimage from "../assets/img/im.jpeg";
import { ReactTyped } from "react-typed";

import AOS from "aos";
import "aos/dist/aos.css";
import Stats from "../component/Stats";

const Products = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <section className="relative bg-white py-16 md:py-24 overflow-hidden lg:py-36 font-plus-jakarta-sans">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <span className="text-green-800 font-semibold text-sm uppercase mb-2 block">
              Discover Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight py-5">
              Build Smarter{" "}
              <span className="text-green-950 font-semibold">
                <ReactTyped
                  strings={[
                    "Digital Products.",
                    "Enterprise Platforms.",
                    "Custom Solutions.",
                    "Marketing Systems.",
                    "E-Commerce Engines.",
                  ]}
                  typeSpeed={80}
                  backSpeed={40}
                  loop
                />
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Empower your business with intuitive design, scalable systems, and
              strategic digital solutions tailored to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-green-950 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-emerald-700 transition duration-300">
                CONTACT US
              </button>
              <button className="bg-transparent border border-green-950 text-green-950 font-semibold py-3 px-8 rounded-full hover:bg-green-100 transition duration-300">
                WATCH VIDEO
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Business Meeting"
              className="w-full h-auto rounded-l-4xl"
            />
          </div>
        </div>
      </section>

      <div className=" antialiased text-gray-800  font-plus-jakarta-sans">
        {/* Hero Section */}
        <section
          className="relative  text-green-900   overflow-hidden rounded-bl-3xl rounded-br-3xl mb-16 lg:py-14"
          data-aos="fade-up"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative rounded-3xl overflow-hidden shadow-xl group">
              {/* YouTube Embed with Increased Height */}
              <iframe
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition duration-300 group-hover:bg-opacity-60">
                {/* Play Icon */}
                <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <svg
                    className="w-8 h-8 text-green-950"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content on the right */}
            <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
              <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight text-green-950">
                Empower Your Brand with Smart Digital Solutions
              </h1>
              <p className="text-2xl md:text-xl mb-8  text-gray-900 ">
                We design tailored digital experiences that elevate your
                business and connect you with your audience in meaningful ways.
                Let’s take your online presence to the next level.
              </p>
              <button className="bg-green-950 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-800 transition duration-300">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </section>

        {/* Experience / Skills Section */}
        {/* EXPERIENCE SECTION */}
        <section className="container mx-auto px-4 py-16 mb-16 font-plus-jakarta-sans">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-gray-500 uppercase mb-2 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Deliver Measurable Growth
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We specialize in driving qualified traffic that converts.
                Whether it's SEO, audits, or optimization, we bring clarity and
                performance to your digital strategy.
              </p>

              {/* Progress Bars */}
              <div className="space-y-6">
                {[
                  { label: "SEO Strategy", percentage: 85 },
                  { label: "Site Auditing", percentage: 75 },
                  { label: "Performance Optimization", percentage: 92 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.label}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-950 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 bg-green-950 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-800 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdyb3d0aHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Growth Insights"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/E0F2F7/2C5282?text=Image+Error";
                }}
              />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="container mx-auto px-4 mb-16 font-plus-jakarta-sans">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-green-700 uppercase mb-2 block">
                Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Got Questions? We’ve Got Answers
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get clarity on our process, pricing, and services. We're here to
                help you make informed decisions.
              </p>
              <button className="bg-green-950 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-800 transition duration-300">
                Contact Support
              </button>
            </div>

            {/* FAQ Items */}
            <div className="w-full lg:w-1/2 space-y-4">
              {[
                {
                  id: 1,
                  question: "What industries do you specialize in?",
                  answer:
                    "We serve a wide range of industries from tech startups to retail, helping them maximize visibility and growth.",
                },
                {
                  id: 2,
                  question: "How long does it take to see results?",
                  answer:
                    "Most clients begin seeing measurable improvements within 4-6 weeks depending on campaign goals.",
                },
                {
                  id: 3,
                  question: "Can you audit our current website?",
                  answer:
                    "Absolutely! Our free audit highlights issues and opportunities for SEO and user experience improvements.",
                },
                {
                  id: 4,
                  question: "What’s included in a strategy session?",
                  answer:
                    "We’ll review your goals, analyze your market, and recommend a path tailored to your business objectives.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-lg font-semibold text-left text-gray-800 focus:outline-none"
                    onClick={() => toggleFAQ(item.id)}
                  >
                    {item.question}
                    <span className="text-green-600 text-2xl">
                      {openFAQ === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openFAQ === item.id && (
                    <div className="px-5 pb-5 text-gray-600">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Stats />
    </>
  );
};

export default Products;
