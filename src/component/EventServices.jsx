import React from "react";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
        />
      </svg>
    ),
    title: "New Technology",
    description:
      "Harness cutting-edge innovation to stay ahead of the curve with solutions built for the future.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "Easy Integration",
    description:
      "Seamlessly integrate our platform into your workflow with minimal setup and maximum efficiency.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.92 12c0 3.072 1.407 5.88 3.65 7.747A12.01 12.01 0 0012 21.055c3.55 0 6.816-1.077 9.58-2.908A12.01 12.01 0 0021.08 12c0-3.072-1.407-5.88-3.65-7.747z"
        />
      </svg>
    ),
    title: "Better Reliability",
    description:
      "Experience unmatched stability and performance, ensuring your systems run smoothly 24/7.",
  },
];

// Icon bubble wrapper
const IconWrapper = ({ children }) => (
  <div className="p-4 bg-green-700 rounded-full mb-4 inline-flex">
    {children}
  </div>
);

// One card
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-green-700 bg-opacity-80 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition duration-300">
      <IconWrapper>{icon}</IconWrapper>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-green-100 text-sm">{description}</p>
    </div>
  );
};

// FULL grid centered
const FeatureGrid = () => {
  return (
    <div className="flex justify-center w-full">
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8
        bg-[#0D542B]
        backdrop-blur-[64px]
        p-6 rounded-lg shadow-xl
        border border-[#032E15]/20
        max-w-6xl w-full mx-auto"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
