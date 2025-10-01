import React, { useState } from "react";
import Logo from "../assets/img/calogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/aboutus" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [status, setStatus] = useState("");

  // ✅ Newsletter submit handler
  // ✅ Newsletter submit handler
  const handleSubscribe = async (event) => {
    event.preventDefault();
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
      setStatus("✅ Subscription successful! Thank you.");
      event.target.reset();
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="text-green-950 py-10 px-6 sm:px-10 lg:px-20 font-plus-jakarta-sans">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {/* Logo and Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-green-950 font-bold text-lg">
              CA Global Digital
            </span>
          </div>
          <p className="text-sm text-green-950 lg:text-xs">
            CA Global Digital Company Ltd is a multi-division technology and
            creative solutions firm committed to empowering individuals,
            businesses, and institutions through innovation, digital
            transformation, and practical tech skills.
          </p>

          {/* ✅ Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com/caglobaldigitalcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-500 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-500 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/caglobalsltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/2348151244098?text=Welcome%20to%20CA%20Digital%20Service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-500 transition"
            >
              <FaWhatsapp size={20} className="text-green-600" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">SERVICES</h3>
          <ul className="text-[17px] space-y-2 text-green-950 lg:text-sm">
            <li>Web Design/Development</li>
            <li>Embedded System & Robotics</li>
            <li>Software Development</li>
            <li>IT Education</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">QUICK LINKS</h3>
          <ul className="text-[17px] space-y-2 text-green-950 lg:text-sm">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-green-500 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">SUPPORT</h3>
          <ul className="text-[17px] space-y-2 text-green-950 lg:text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-[17px] text-green-950 lg:text-sm mb-4">
            Subscribe to our newsletter.
          </p>
          <form onSubmit={handleSubscribe}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="px-3 py-2 w-full sm:w-auto rounded text-black bg-white outline-green-700 border border-green-700 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition text-[17px] lg:text-sm"
              />
            </div>
            <div className="flex sm:justify-end mt-3">
              <Button
                type="submit"
                className="bg-green-950 text-white text-xs py-5 px-5 hover:bg-green-900 font-plus-jakarta-sans font-bold cursor-pointer w-full"
              >
                Subscribe
              </Button>
            </div>
          </form>

          {/* ✅ Status Message */}
          {/* Toast Container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            className="font-plus-jakarta-sans"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-green-950 border-t border-green-700 pt-6 text-[17px] lg:text-sm">
        © {currentYear} CA Globals. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
