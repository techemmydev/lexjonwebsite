import React, { useState, useRef, useEffect } from "react";

// Sample FAQ data
const faqData = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide end-to-end digital solutions including software development, embedded systems engineering, robotics and automation, and IT consultancy. Our goal is to help organizations innovate and scale efficiently through technology.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "Our typical clients range from small-to-medium enterprises (SMEs) to large corporations across various sectors looking for digital transformation and advanced technology solutions.",
  },
  {
    question: "Do you build custom software solutions?",
    answer:
      "Yes, absolutely. Custom software development is a core part of our offering. We work closely with you to understand your unique needs and build scalable, tailor-made solutions.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with diverse industries including Healthcare, Finance, Manufacturing, Retail, and Energy, among others.",
  },
  {
    question: "Can I request a demo or consultation?",
    answer:
      "Yes, you can. Please contact us through our website's contact form or call us directly to schedule a free demo or consultation.",
  },
  {
    question: "How long does it take to complete a typical project?",
    answer:
      "Project timelines vary greatly depending on scope and complexity. A small project may take a few weeks, while a large-scale solution can take several months. We'll provide an estimated timeline after the initial consultation.",
  },
  // Remaining questions with example answers:
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages, including bug fixes, security updates, and feature enhancements to ensure your solution runs smoothly.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our main office is located in [Insert City/Region Here], and we serve clients globally through our remote teams and distributed development model.",
  },
  {
    question: "What makes your company different from others?",
    answer:
      "We differentiate ourselves through our commitment to end-to-end solutions, deep expertise in embedded systems and robotics, and a collaborative approach focused on long-term client success and innovation.",
  },
  {
    question: "How can I join your training or internship programs?",
    answer:
      "We periodically open applications for our training and internship programs. Please check the 'Careers' or 'Academy' section of our website for current opportunities and application instructions.",
  },
];

/**
 * FAQ Item Component with dynamic height transition
 */
const FaqItem = ({ question, answer, isOpen, toggleItem }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      {/* Question Header */}
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out"
        onClick={toggleItem}
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        {/* Plus / Minus Icon */}
        <span className="text-xl transition-transform duration-300 ease-in-out">
          {isOpen ? (
            // Minus icon
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          ) : (
            // Plus icon
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Answer Content */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pb-4 px-4 text-gray-600">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Main FAQ Section
 */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-12 font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#000000] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="bg-gray-50 rounded-lg shadow-lg divide-y divide-gray-200">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              toggleItem={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
