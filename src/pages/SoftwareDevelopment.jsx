import React from "react";
import ServiceImg from "../assets/img/serviceImg1.png";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored solutions built around your unique processes and goals.",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de1cd0e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Application Development",
    desc: "Fast, responsive, and visually stunning web applications.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile App Development",
    desc: "iOS and Android apps that deliver seamless user experiences.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SaaS Product Development",
    desc: "Cloud-based platforms designed for scalability and global reach.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Software Integration",
    desc: "Ensuring your tools and systems work together smoothly.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous updates, bug fixes, and performance improvements.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
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
    <div className="font-sans text-gray-800 font-plus-jakarta-sans">
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
          <img
            src={ServiceImg}
            alt="Modern Software Development"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50 font-plus-jakarta-sans">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">What We Do Here</h2>
            <p className="mb-4">
              Our Software Development Division at{" "}
              <strong>CA Global Digital Company Ltd</strong> is dedicated to
              turning your vision into a digital reality. We combine technical
              expertise, creative thinking, and agile methodologies to deliver
              applications that solve real problems and create new
              opportunities.
            </p>
            <p>
              Whether you need a custom enterprise system, a mobile app, or a
              SaaS platform, we ensure your software is user-friendly, secure,
              and built to scale.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
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
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Trust"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="contact"
        className="bg-gradient-to-r from-green-900 to-green-600 text-white py-16 text-center text-gray-700 font-plus-jakarta-sans"
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
