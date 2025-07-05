import React from "react";

const services = [
  {
    id: 1,
    icon: (
      <svg
        className="w-10 h-10 text-green-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-6h13M4 6h16M4 10h16M4 14h8"
        />
      </svg>
    ),
    title: "AI & Automation",
    description:
      "Leverage AI to automate workflows, enhance decision-making, and deliver intelligent digital experiences.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-10 h-10 text-green-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7v4a1 1 0 001 1h3m10-5v12m0-12h-4m4 0h4M3 17h12"
        />
      </svg>
    ),
    title: "Cloud Engineering",
    description:
      "Build scalable, secure, and reliable cloud solutions for your enterprise with AWS, Azure, or GCP.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-10 h-10 text-green-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 11V7a4 4 0 118 0v4m-2 4h-4m-3 4H6a2 2 0 01-2-2V9a2 2 0 012-2h4m3 4h6"
        />
      </svg>
    ),
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our end-to-end cybersecurity assessments, SOC services, and threat mitigation.",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-10 h-10 text-green-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h11M9 21v-6m4 6v-4m4 4v-2m2 2v-6"
        />
      </svg>
    ),
    title: "Data Analytics",
    description:
      "Transform raw data into insights with our advanced analytics, dashboards, and real-time data pipelines.",
  },
  {
    id: 5,
    icon: (
      <svg
        className="w-10 h-10 text-green-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    title: "QA & Testing",
    description:
      "Ensure quality with our full-cycle software testing services, including automation, performance, and regression testing.",
  },
  {
    id: 6,
    icon: (
      <svg
        className="w-10 h-10 text-green-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "DevOps & CI/CD",
    description:
      "Streamline development with modern DevOps pipelines, GitOps workflows, and automated deployments.",
  },
];

const Mission = () => {
  return (
    <div className=" antialiased text-white bg-green-900 font-plus-jakarta-sans">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Digital Services We Offer</h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            We power your growth through innovative digital engineering,
            automation, and smart cloud-first strategies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 bg-green-800/50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-green-100 text-center text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
