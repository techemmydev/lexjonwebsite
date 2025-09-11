import React from "react";
// import ServiceImg from "../assets/img/serviceImg1.png";
import workstation from "../assets/img/workstation.avif";
import Software from "../assets/img/sofware.avif";
import Softwareintergration from "../assets/img/integration.avif";
import dev from "../assets/img/dev.avif";
import mobile from "../assets/img/mobile.avif";
import maintance from "../assets/img/maintance.avif";
import sass from "../assets/img/sass.avif";
import business from "../assets/img/business.avif";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored solutions built around your unique processes and goals.",
    img: Software,
  },
  {
    title: "Web Application Development",
    desc: "Fast, responsive, and visually stunning web applications.",
    img: dev,
  },
  {
    title: "Mobile App Development",
    desc: "iOS and Android apps that deliver seamless user experiences.",
    img: mobile,
  },
  {
    title: "SaaS Product Development",
    desc: "Cloud-based platforms designed for scalability and global reach.",
    img: sass,
  },
  {
    title: "Software Integration",
    desc: "Ensuring your tools and systems work together smoothly.",
    img: Softwareintergration,
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous updates, bug fixes, and performance improvements.",
    img: maintance,
  },
];

const processSteps = [
  {
    step: "1. Discovery & Strategy",
    desc: "Understanding your needs and defining the roadmap.",
  },
  {
    step: "2. UI/UX Design",
    desc: "Crafting intuitive, beautiful interfaces.",
  },
  {
    step: "3. Development",
    desc: "Writing clean, efficient, and secure code.",
  },
  {
    step: "4. Testing",
    desc: "Ensuring functionality, security, and performance.",
  },
  { step: "5. Deployment", desc: "Launching your solution with confidence." },
  {
    step: "6. Ongoing Support",
    desc: "Keeping your software running smoothly.",
  },
];

export default function SoftwareDevelopment() {
  return (
    <div className=" text-gray-800 font-plus-jakarta-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-900 text-white lg:p-20">
        <div className="max-w-7xl mx-auto px-6 py-30 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transforming Ideas into Powerful Software Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We design, develop, and deploy scalable, high-performance software
              tailored to your business needs. From concept to launch, we
              deliver solutions that drive results.
            </p>
            <a
              href="#contact"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Get a Free Consultation
            </a>
          </div>
          {/* <img
            src=""
            alt="Modern Software Development"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          /> */}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50 font-plus-jakarta-sans">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">
              What We Do Here
            </h2>
            <p className="mb-4  text-black">
              Our Software Development Division at{" "}
              <strong>CA Global Digital Company Ltd</strong> is dedicated to
              turning your vision into a digital reality. We combine technical
              expertise, creative thinking, and agile methodologies to deliver
              applications that solve real problems and create new
              opportunities.
            </p>
            <p className=" text-black">
              Whether you need a custom enterprise system, a mobile app, or a
              SaaS platform, we ensure your software is user-friendly, secure,
              and built to scale.
            </p>
          </div>
          <img
            src={workstation}
            alt="Development Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 font-plus-jakarta-sans">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 font-plus-jakarta-sans">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((phase) => (
              <div
                key={phase.step}
                className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold mb-2">{phase.step}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 font-plus-jakarta-sans">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Businesses Trust Our Development Team
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Expert Team</strong> – Skilled developers, designers,
                and project managers.
              </li>
              <li>
                <strong>Agile Approach</strong> – Flexible and adaptive project
                management.
              </li>
              <li>
                <strong>End-to-End Service</strong> – From concept to
                post-launch support.
              </li>
              <li>
                <strong>Quality & Security</strong> – Rigorous testing and
                industry best practices.
              </li>
            </ul>
          </div>
          <img src={business} alt="Trust" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="contact"
        className="bg-gradient-to-r from-green-900 to-green-600 py-16 text-center text-gray-700 font-plus-jakarta-sans"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="mb-6 text-white">
            Let’s discuss how our team can create software that moves your
            business forward.
          </p>
          <a
            href="mailto:sales@caglobals.com"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
