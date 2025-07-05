import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import image7 from "../assets/img/user-cover-2.png";
import image8 from "../assets/img/user-cover-4.png";
import image9 from "../assets/img/fixed-height sec-.png";

const team = [
  {
    name: "Mina Collins",
    role: "Teacher in Math",
    image: image7,
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Anderson Matthew",
    role: "Teacher in Music",
    image: image8,
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Cynthia Misso",
    role: "Teacher in English",
    image: image9,
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

export default function TeamMember() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-plus-jakarta-sans">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-2">
          Our Team
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
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
