import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import image7 from "../assets/img/user-cover-2.png";
import image8 from "../assets/img/user-cover-4.png";
import image9 from "../assets/img/fixed-height sec-.png";

const team = [
  {
    name: "Alex Johnson",
    role: "Lead Software Engineer",
    image: image7,
    desc: "Specializes in full-stack development and cloud solutions, with a passion for mentoring young developers and building innovative digital products.",
  },
  {
    name: "Sofia Martinez",
    role: "Creative Director",
    image: image8,
    desc: "Expert in digital marketing, branding, and content creation, helping businesses craft compelling visual and strategic identities.",
  },
  {
    name: "Dr. Ethan Carter",
    role: "Robotics & AI Specialist",
    image: image9,
    desc: "Focused on robotics programming, AI-driven automation, and inspiring the next generation of engineers to think beyond limits.",
  },
];

export default function TeamMember() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-plus-jakarta-sans">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-2">
          Meet Our Experts
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A dedicated team of innovators, engineers, and creatives committed to
          delivering world-class digital solutions and transformative learning
          experiences.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {team.map((person, idx) => (
          <div key={idx} className="text-center">
            <img
              src={person.image}
              alt={person.name}
              className="mx-auto w-36 h-36 object-cover rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {person.name}
            </h3>
            <p className="text-emerald-600 font-medium mb-3">{person.role}</p>
            <p className="text-sm text-gray-600 mb-4">{person.desc}</p>
            <div className="flex justify-center space-x-4 text-emerald-600 text-sm">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
