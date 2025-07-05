import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import AOS from "aos";
import "aos/dist/aos.css";
// import imagee from "../assets/img/image.png";
import imagee1 from "../assets/img/callgril.png";
import imagee2 from "../assets/img/call.png";
import imagee3 from "../assets/img/chat_bubble.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const customerData = [
  {
    head: "Talk to Sales",
    paragraph:
      "Interested in LexJon software solutions? Call our sales team and let's talk business.",
    image: imagee2,
    button: "Contact Sales",
  },
  {
    head: "Customer Support",
    paragraph:
      "Our support team is here to help with any product issues or general questions you may have.",
    image: imagee3,
    button: "Get Support",
  },
  {
    head: "Live Chat",
    paragraph:
      "Chat with our team for quick responses and real-time assistance on any inquiries.",
    image: imagee3,
    button: "Start Chat",
  },
];

const addressData = [
  { head: "WEBSITE", para: "www.lexjon@eschool.ng" },
  { head: "PHONE", para: "+234 123 456 7890" },
  { head: "ADDRESS", para: "123 B Avenue, Ikeja, Lagos, Nigeria" },
];

const ContactPage = () => {
  const [openModal, setOpenModal] = useState(false); // State for modal
  const [showPrivacy, setShowPrivacy] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-5 lg:py-10 font-plus-jakarta-sans ">
      {/* Top Section */}
      {/* Get in touch section */}
      {/* Section with image and text */}
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

          {/* Image container with z-0 (behind the floating cards) */}
          <div className="w-full max-w-[500px] sm:max-w-[600px] flex justify-center">
            <img
              data-aos="fade-up"
              src={imagee1}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Floating Cards: position absolute + higher z-index */}

        <div className="absolute lg:bottom-[-50px] left-1/2 transform -translate-x-1/2 w-full px-4 z-10 bottom-[-105px]">
          {/* ✅ Mobile View (Swiper Slider) */}
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
                    <Button className="bg-green-900 text-white text-[15px] py-3 px-5 hover:bg-green-800 font-plus-jakarta-sans font-bold w-[266px]">
                      {items.button}
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ✅ Desktop View (unchanged) */}
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
                <Button className=" text-white text-[15px] py-3 px-5 hover:bg-[#90e784d6] font-plus-jakarta-sans font-bold w-[266px] bg-green-950">
                  See all open positions
                </Button>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0258733373967!2d3.3695381740458545!3d6.51840862322444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5170879e7d%3A0x247e24b1d430bd15!2sYabatech%20Staff%20Quarter%20Block!5e0!3m2!1sen!2sng!4v1741888499453!5m2!1sen!2sng"
              width="100%"
              height="500"
              title="Responsive Google Map"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"s
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg lg:mt-14 font-plus-jakarta-sans">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you!</p>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name" // Add this
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email" // Added name attribute
                  // required
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-500 font-plus-jakarta-sans">
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
                  name="message" // Added name attribute
                  // required
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none h-24 resize-none placeholder:text-[12px] text-[13px] font-plus-jakarta-sans"
                ></textarea>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="checkbox" // Added name attribute
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

              <Button className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-800 transition flex items-center justify-center">
                <span className="text-sm font-semibold">Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </section>
      {/* Map Section */}
    </section>
  );
};

export default ContactPage;
