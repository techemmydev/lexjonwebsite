import React from "react";
import img from "../assets/img/Serviceimagess/Icon.svg";
const CheckIcon = () => (
  <span className="flex items-center justify-center bg-[#DCFCE7] rounded-full mr-3 flex-shrink-0 p-2">
    <img src={img} alt="" className="w-4 h-4" />
  </span>
);

const CourseDetails = () => {
  const whatYoullLearn = [
    "HTML, CSS, JavaScript",
    "React and Next.js",
    "Node.js and Express",
    "MongoDB, APIs, Authentication",
    "Deployment and GitHub",
  ];

  const whatWeBuild = [
    "Business websites and dashboards",
    "E-commerce systems",
    "Internal workflow automation apps",
  ];

  const benefits = [
    "Hands-on project-based learning",
    "Mentorship and certification",
    "Career and portfolio support",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-inter">
      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Introduction</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          At CA Global Digital, we don't just teach we build. Learn to master
          both front-end and back-end web development using React,{" "}
          <strong>Node.js</strong>, and MongoDB, through real projects and
          industry-standard practices.
        </p>
      </section>

      <div className="flex flex-col gap-10">
        {/* What You'll Learn Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">What You'll Learn</h3>
          <ul className="space-y-4">
            {whatYoullLearn.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-gray-800"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What We Build Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">What We Build</h3>
          <ul className="space-y-4">
            {whatWeBuild.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-gray-800"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Benefits</h3>
          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-gray-800"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Footer CTA Section */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
          Ready to upgrade your digital skills or partner with us for your next
          project?
        </h3>
        <a
          href="#contact"
          className="inline-block px-8 py-3 text-white font-medium bg-green-900 rounded shadow-lg hover:bg-green-800 transition duration-300"
        >
          Get in Touch &rarr;
        </a>
      </footer>
    </div>
  );
};

export default CourseDetails;
