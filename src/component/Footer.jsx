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

  return (
    <footer className="text-green-950 py-10 px-6 sm:px-10 lg:px-20 font-inter bg-[#032E15]">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {/* Logo and Description */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-white font-bold text-lg">
              CA Global Digital
            </span>
          </div>
          <p className="text-sm text-white lg:text-[15px]">
            CA Global Digital Company Ltd is a multi-division technology and
            creative solutions firm committed to empowering individuals,
            businesses, and institutions through innovation, digital
            transformation, and practical tech skills.
          </p>

          <div className="flex gap-4 mt-6">
            {/* Facebook */}
            <a
              href="https://facebook.com/caglobaldigitalcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white p-3 rounded-[5px] hover:bg-green-700 transition"
            >
              <FaFacebookF size={20} />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white p-3 rounded-[5px] hover:bg-green-700 transition"
            >
              <FaTwitter size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white p-3 rounded-[5px] hover:bg-green-700 transition"
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/caglobalsltd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white p-3 rounded-[5px] hover:bg-green-700 transition"
            >
              <FaInstagram size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348151244098?text=Welcome%20to%20CA%20Digital%20Service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white p-3 rounded-[5px] hover:bg-green-700 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-light text-lg mb-3 text-white">SERVICES</h3>
          <ul className="text-[17px] space-y-2 text-white lg:text-sm">
            <li>Web Design/Development</li>
            <li>Embedded System & Robotics</li>
            <li>Software Development</li>
            <li>IT Education</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-light text-lg mb-3 text-white">QUICK LINKS</h3>
          <ul className="text-[17px] space-y-2 text-white lg:text-sm">
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
          <h3 className="font-light text-lg mb-3 text-white">SUPPORT</h3>
          <ul className="text-[17px] space-y-2 text-white lg:text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-white border-t border-green-700 pt-6 text-[17px] lg:text-sm">
        © {currentYear} CA Globals. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
