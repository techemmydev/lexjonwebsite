import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import imagee1 from "../assets/img/callgril.png";
import imagee2 from "../assets/img/call.png";
import imagee3 from "../assets/img/chat_bubble.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// ✅ Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customerData = [
  {
    head: "Talk to Sales",
    paragraph:
      "Interested in LexJon software solutions? Call our sales team and let's talk business.",
    image: imagee2,
    button: "+234 906 381 4899",
  },
  {
    head: "Email Us",
    paragraph:
      "Chat with our team for quick responses and real-time assistance on any inquiries.",
    image: imagee3,
    button: "Info@caglobals.com",
  },
  {
    head: "Social Media",
    paragraph:
      "Our support team is here to help with any product issues or general questions you may have.",
    image: imagee3,
    myicons: [
      {
        label: "Facebook",
        href: "https://facebook.com/caglobaldigitalcompany",
        icon: <FaFacebookF className="h-5 w-5" />,
      },
      {
        label: "Instagram",
        href: "https://instagram.com/caglobalsltd",
        icon: <FaInstagram className="h-5 w-5" />,
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/2348151244098?text=Welcome%20to%20CA%20Digital%20Service",
        icon: <FaWhatsapp className="h-5 w-5 text-green-600" />,
      },
    ],
    button: "Follow Us",
  },
];

const addressData = [
  { head: "WEBSITE", para: "www.lexjon@eschool.ng" },
  { head: "PHONE", para: "+2348151244098" },
  { head: "ADDRESS", para: "51 Sarah Faboyede St, Oshodi-Isolo, Lagos" },
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Web3Forms handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    // ✅ Required Web3Forms key
    formData.append("access_key", "e9c5c15d-a128-461b-8794-58c846829f33");

    // ✅ Extra fields
    formData.append(
      "subject",
      "New Submission from CA Global Digital Company Ltd"
    );
    formData.append("from_name", "CA Global Digital Company Ltd");

    // reply_to will be the user's email
    formData.append("reply_to", formData.get("email"));

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Your message was sent successfully!");
        event.target.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Failed to send message. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-5 lg:py-10 font-plus-jakarta-sans ">
      {/* Top Section */}
      <div className="w-full bg-tertiary min-h-[600px] flex justify-center items-center px-4 relative ">
        <div className="flex flex-col sm:flex-row justify-center items-center lg:gap-5 max-w-6xl w-full pt-16 sm:pt-0 relative ">
          <div
            data-aos="fade-right"
            className="max-w-md text-center sm:text-left"
          >
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="text-sm text-text-color my-4">
              Have a question, need help, or want to learn more about our
              services? Reach out to us — we're here to help and always ready to
              talk.
            </p>
          </div>

          {/* Image */}
          <div className="w-full max-w-[500px] sm:max-w-[600px] flex justify-center">
            <img
              data-aos="fade-up"
              src={imagee1}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute lg:bottom-[-50px] left-1/2 transform -translate-x-1/2 w-full px-4 z-10 bottom-[-105px]">
          {/* Mobile View (Swiper) */}
          <div className="sm:hidden">
            <Swiper spaceBetween={16} slidesPerView={1.1}>
              {customerData.map((items, index) => (
                <SwiperSlide key={index}>
                  <div
                    data-aos="fade-up"
                    className="bg-white rounded-xl shadow-md flex flex-col items-center p-5 mx-auto w-[90%]"
                  >
                    <img
                      className="my-4 w-12 h-12 object-contain"
                      src={items.image}
                      alt={items.head}
                    />
                    <div className="text-lg font-medium text-center mb-1">
                      {items.head}
                    </div>
                    <div className="text-xs text-text-color text-center mb-4">
                      {items.paragraph}
                    </div>
                    {index === 2 && items.myicons && (
                      <div className="flex gap-4 mb-4">
                        {items.myicons.map((iconItem, i) => (
                          <a
                            key={i}
                            href={iconItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-900 hover:underline flex items-center gap-1"
                          >
                            {iconItem.icon}
                            <span className="text-sm">{iconItem.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {index !== 2 && (
                      <Button className="bg-green-900 text-white text-[15px] py-3 px-5 hover:bg-green-800 font-plus-jakarta-sans font-bold w-[266px]">
                        {items.button}
                      </Button>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-8 flex-wrap max-w-5xl mx-auto">
            {customerData.map((items, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="w-full sm:w-[290px] bg-white rounded-xl shadow-md flex flex-col items-center p-5"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="my-4 w-12 h-12 object-contain"
                    src={items.image}
                    alt={items.head}
                  />
                </div>
                <div className="text-lg font-medium text-center mb-1">
                  {items.head}
                </div>
                <div className="text-xs text-text-color text-center mb-4">
                  {items.paragraph}
                </div>
                {index === 2 && items.myicons && (
                  <div className="flex gap-4 mb-4">
                    {items.myicons.map((iconItem, i) => (
                      <a
                        key={i}
                        href={iconItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-900 hover:underline flex items-center gap-1"
                      >
                        {iconItem.icon}
                        <span className="text-[10px]">{iconItem.label}</span>
                      </a>
                    ))}
                  </div>
                )}
                {index !== 2 && (
                  <Button className="bg-green-900 text-white text-[15px] py-3 px-5 hover:bg-green-800 font-plus-jakarta-sans font-bold w-[266px]">
                    {items.button}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form + Address */}
      <section className="max-w-6xl mx-auto px-6 py-12 mt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="w-full h-80 md:h-auto lg:mt-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0223206241994!2d3.2917203737297607!3d6.5188580232199085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f03efbe96dd%3A0x4c81d2d8609222d3!2s51%20Sarah%20Faboyede%20St%2C%20Oshodi-Isolo%2C%20Lagos%20100264%2C%20Lagos!5e0!3m2!1sen!2sng!4v1759081841228!5m2!1sen!2sng"
              width="100%"
              height="500"
              title="Responsive Google Map"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg lg:mt-14 font-plus-jakarta-sans">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you!</p>

            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                  <span className="text-gray-500 text-[12px]">+234</span>
                  <input
                    type="tel"
                    name="clientPhone"
                    placeholder="Enter phone number"
                    className="ml-2 w-full focus:outline-none text-[12px]"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-semibold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your Message"
                  name="message"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none h-24 resize-none placeholder:text-[12px] text-[13px]"
                  required
                ></textarea>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="checkbox"
                  className="mr-2"
                  required
                />
                <label className="text-sm text-gray-600 lg:text-[12px]">
                  By continuing, you acknowledge and agree to our{" "}
                  <a
                    onClick={() => setShowPrivacy(true)}
                    className="font-semibold text-green-950 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and Terms of Service.
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-900 text-white py-2 rounded-lg transition flex items-center justify-center ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-green-800"
                }`}
              >
                <span className="text-sm font-semibold">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="font-plus-jakarta-sans"
      />
    </section>
  );
};

export default ContactPage;
