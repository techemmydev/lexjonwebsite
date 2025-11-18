import React from "react";
import img from "../assets/img/Serviceimagess/Icon.svg";

const CheckIcon = () => (
  <span className="flex items-center justify-center bg-[#DCFCE7] rounded-full mr-3 flex-shrink-0 p-2">
    <img src={img} alt="" className="w-4 h-4" />
  </span>
);

const SectionList = ({ title, items }) => (
  <section className="mb-10">
    <h3 className="text-2xl font-semibold mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-lg text-gray-800">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default function CourseDetails({
  introTitle,
  introDescription,
  sections,
  ctaText,
  ctaLink,
}) {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-inter">
      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{introTitle}</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          {introDescription}
        </p>
      </section>

      {/* Dynamic Sections */}
      <div className="flex flex-col gap-10">
        {sections.map((section, index) => (
          <SectionList
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
          {ctaText}
        </h3>

        <a
          href={ctaLink}
          className="inline-block px-8 py-3 text-white font-medium bg-green-900 rounded shadow-lg hover:bg-green-800 transition duration-300"
        >
          Get in Touch →
        </a>
      </footer>
    </div>
  );
}
