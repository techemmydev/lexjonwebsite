import React, { useState, useEffect } from "react";
import img1 from "../assets/img/woman.png";
import img2 from "../assets/img/user-cover-4.png";
import img3 from "../assets/img/user-cover-2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Icon for the testimonial navigation (Simple Arrows)
const ArrowIcon = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-600 hover:text-gray-900 transition duration-150"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    {direction === "left" ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    )}
  </svg>
);

const ClientSection = () => {
  const testimonials = [
    {
      quote:
        "CA Global Digital transformed my career! The Full Stack Development program was hands-on and practical. I landed a remote job few months after graduating.",
      name: "Sarah. O",
      title: "Software Engineer, Lagos.",
      avatar: img2,
    },
    {
      quote:
        "The personalized mentorship and career support were invaluable. I now build high-quality software with confidence and speed.",
      name: "Chidi N.",
      title: "Product Developer, Abuja.",
      avatar: img3,
    },
  ];
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ Newsletter submit handler
  // ✅ Newsletter submit handler
  const handleSubscribe = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.target);

      // Web3Forms required key
      formData.append("access_key", "0a024357-1551-410a-8b1b-1af78b1f5eec");

      // ✅ Add extra fields
      formData.append(
        "subject",
        "New Subscription to CA Global Digital Company Ltd Newsletter"
      );
      formData.append("from_name", "CA Global Digital Company Ltd");

      // reply_to should match the subscriber's email
      formData.append("reply_to", formData.get("email"));

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("✅ Subscription successful! Thank you.");
        event.target.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  // Carousel Logic
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-inter">
      {/* 1. Image + Text Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={img1}
            alt="Woman on VR headset"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 w-full lg:pt-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            Building the Future of Software Development
          </h2>
          <div className="space-y-4 text-gray-600 text-base sm:text-lg">
            <p>
              Empowering teams with intelligent tools, automation, and
              collaboration to redefine how modern software is built and scaled.
            </p>
            <p>
              We're creating smarter, faster, and more connected development
              environments that transform ideas into world-class digital
              solutions.
            </p>
            <p>
              Uniting innovators, developers, and creators to shape the next era
              of software — open, scalable, and human-centered.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Testimonial Slider */}
      <section className="text-center mb-20">
        <h3 className="text-3xl font-bold mb-10 text-gray-900">
          What Our Clients Say
        </h3>

        <div className="max-w-3xl mx-auto relative px-4 sm:px-0">
          {/* Quote */}
          <blockquote
            key={index}
            className="text-xl sm:text-1xl italic text-[#88918B] mb-8 transition-opacity duration-500 font-[300]"
          >
            “{current.quote}”
          </blockquote>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover shadow-md mb-3"
            />
            <p className="font-semibold text-gray-900">{current.name}</p>
            <p className="text-sm text-gray-500">{current.title}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center  mt-6 space-x-14 ">
            <button onClick={prev} aria-label="Previous testimonial">
              <ArrowIcon direction="left" />
            </button>
            <button onClick={next} aria-label="Next testimonial">
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Newsletter */}
      <section className="text-center py-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Subscribe to our newsletter
        </h3>
        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600 shadow-sm"
          />
          <button
            type="submit"
            className="w-full sm:w-1/3 p-3 text-white font-medium bg-green-900 rounded-md hover:bg-green-800 transition duration-300 shadow-lg"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ClientSection;
