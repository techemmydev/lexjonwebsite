import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

import Companies from "../component/Companieslogo";
import OurExpertise from "../component/OurExpertise";
import Testimonial from "../component/Testimonial";

import ServiceImg from "../assets/img/serviceImg1.png";
import Newletter from "../component/Newletter";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="font-plus-jakarta-sans sm:px-8 mt-32 lg:mt-16 relative p-5 lg:p-0">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10 lg:p-10">
          <div className="flex flex-col items-center sm:items-start gap-6">
            <h1
              className="text-3xl sm:text-4xl font-bold text-center sm:text-left"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              We Build{" "}
              <ReactTyped
                strings={[
                  "Digital Products.",
                  "Enterprise Platforms.",
                  "Custom Solutions.",
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </h1>

            <p
              className="text-[16px] lg:text-[16px] text-center sm:text-left text-[#88918B] font-light leading-6"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              At CA Globals Tech, we specialize in crafting innovative digital
              solutions that empower businesses to scale, automate, and
              transform. From cloud-native software to full-stack web and mobile
              apps, we architect performance-driven systems designed for impact.
            </p>
          </div>

          <img
            src={ServiceImg}
            alt="Digital Tech Illustration"
            className="w-full sm:w-1/2 max-w-md"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="200"
          />
        </div>
      </section>

      {/* Company Logos */}
      <div className="w-full bg-green-900 sm:px-8 font-plus-jakarta-sans text-white">
        <Companies />
      </div>

      {/* Our Expertise Section */}
      <section className="w-full py-16 px-4 sm:px-8 text-center font-plus-jakarta-sans">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-offset="200"
            className="text-[14px] sm:text-base text-[#88918B] font-normal leading-6"
          >
            We bring deep experience in software engineering, AI/ML integration,
            DevOps, UX strategy, and scalable cloud architecture. Our
            cross-functional teams deliver world-class products across fintech,
            healthtech, logistics, and education.
          </p>
        </div>
      </section>

      <OurExpertise />

      {/* Testimonials */}
      <div className="lg:mb-10">
        <Testimonial title="Feedback from Our Clients" />
      </div>
      <Newletter />
    </>
  );
};

export default ServicePage;
