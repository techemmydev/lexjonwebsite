import React from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../assets/img/Serviceimagess/service1.png";
import img2 from "../assets/img/Serviceimagess/service2.png";
import img3 from "../assets/img/Serviceimagess/service3.png";
import img4 from "../assets/img/Serviceimagess/service4.png";
import img5 from "../assets/img/Serviceimagess/service5.png";
import img6 from "../assets/img/Serviceimagess/service6.png";
import Button from "./Button";

const services = [
  {
    title: "Full-Stack Development",
    img: img4,
    tag: "Learn More",
    link: "/fullstack",
    desc: "Learn modern web, mobile and desktop application development using the latest frameworks, tools and best practices..",
  },
  {
    title: "Robotics & Automation",
    img: img3,
    tag: "Learn More",
    link: "/robotics",
    desc: "Design and program autonomous robots with sensors, actuators and intelligent decision making systems..",
  },
  {
    title: "Embedded Systems Programming",
    img: img6,
    tag: "Learn More",
    link: "/embedded",
    desc: "Develop efficient, low level software for micro controllers and IOT devices to connect the physical and digital worlds.",
  },
  {
    title: "Software Engineering Principles",
    img: img1,
    tag: "Learn More",
    link: "/software-engineering",
    desc: "Master algorithms, data structures, and clean coding practices to build scalable and maintainable solutions.",
  },
  {
    title: "Digital Literacy & IT Foundations",
    img: img5,
    tag: "Learn More",
    link: "/digital-literacy",
    desc: "Apply knowledge directly through capstone projects, hackathons, and real world problem solving challenges.",
  },
  {
    title: "Hands-on Project Learning",
    img: img2,
    tag: "Learn More",
    link: "/projects",
    desc: "Learn by doing — work on real-world, team-based tech projects.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-10 font-inter">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 sm:h-60 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

              <Link
                to={item.link}
                className={`mt-4 inline-flex items-center px-4 py-4 rounded-md text-sm transition group ${
                  index === 0
                    ? "bg-[#032E15] text-white  hover:bg-green-800 font-inter"
                    : " text-[#000000] hover:text-green-900 border-1 border-orange-200 font-inter"
                }`}
              >
                {item.tag}
                <FiArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-xl mx-auto px-4">
        <h2 className="text-lg sm:text-xl font-semibold">
          Ready to upgrade your digital skills or partner with us for your next
          project?
        </h2>

        <Button className="mt-4 px-6 py-4 bg-green-900 text-white rounded-lg hover:bg-green-800 transition text-sm">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
