import React, { useState } from "react";

const CarrerPage = () => {
  const benefits = [
    {
      title: "Large Beautiful Office",
      desc: "Enjoy a comfortable office environment with modern design.",
      icon: "🏢",
    },
    {
      title: "Great Co-Workers",
      desc: "Work with some of the best talent in the industry.",
      icon: "🤝",
    },
    {
      title: "Easy Location",
      desc: "Well-connected location with smooth transport access.",
      icon: "📍",
    },
    {
      title: "Education Opportunities",
      desc: "Grow your career with courses and training support.",
      icon: "🎓",
    },
    {
      title: "Free Lunch & Snacks",
      desc: "Enjoy daily meals and snacks on us.",
      icon: "🍱",
    },
    {
      title: "Performance Awards",
      desc: "Get recognized for your efforts and excellence.",
      icon: "🏆",
    },
  ];

  const jobOpenings = [
    "Marketing Advisor",
    "Supervisor",
    "Field Agent",
    "Receptionist",
  ];

  return (
    <div className="text-gray-800 font-plus-jakarta-sans">
      {/* HERO SECTION */}
      <section className="bg-green-950 text-white py-35 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-3">We’re Hiring</h2>
          <p className="text-xl font-semibold mb-4">Your Career Starts Here</p>
          <p className="text-base md:text-lg mb-6">
            Join a dynamic team that's shaping the future of digital. Grow with
            us.
          </p>
          <button className="bg-white text-green-950 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">
            View Openings
          </button>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Join Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Careerly, we’re more than a workplace—we’re a collaborative,
            caring community building real impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOB OPENINGS + FORM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Job Cards */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {jobOpenings.map((role, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <h4 className="font-bold text-lg mb-2">{role}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Be part of a forward-thinking, fast-growing team.
                </p>
                <button className="bg-green-950 text-white text-sm px-4 py-2 rounded hover:bg-green-900 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Apply Now</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Position Interested In"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Tell us a bit about yourself"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-green-950 text-white py-2 px-4 rounded hover:bg-green-900 w-full transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-10 px-6 border-t">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 text-center text-sm text-gray-700">
          <div>
            <p className="font-semibold">🏆 Award Winning</p>
            <p>Recognized for outstanding agency excellence.</p>
          </div>
          <div>
            <p className="font-semibold">💰 Wellness Allowance</p>
            <p>Flexible benefits for health and productivity.</p>
          </div>
          <div>
            <p className="font-semibold">🛡️ Full Insurance</p>
            <p>Comprehensive plans for peace of mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarrerPage;
