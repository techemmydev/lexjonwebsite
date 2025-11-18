import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Homepage from "./pages/Homepage";
import Layout from "./layouts/Layout";
import "./App.css";
import Aboutpage from "./pages/Aboutpage";

import PagenotFound from "./pages/PagenotFound";

import ServicePage from "./pages/ServicePage";

import Contactpage from "./pages/ContactPage";

import SoftwareDevelopment from "./pages/SoftwareDevelopment";

import RoboticsAutomation from "./pages/RoboticsAutomation";
import EmbeddedRoboticsLanding from "./pages/EmbeddedRoboticsLanding";
import SoftwareEngineeringPrinciples from "./pages/SoftwareEngineeringPrinciples";
import DigitalLiteracyITFoundations from "./pages/DigitalLiteracyITFoundations";
import HandsonProjectLearning from "./pages/HandsonProjectLearning";
const App = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      setScrollDirection(window.scrollY > lastScrollY ? "down" : "up");
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      {/* Scroll Button */}
      <button
        onClick={scrollDirection === "down" ? scrollToBottom : scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-orange-500 transition-all duration-300"
        title={
          scrollDirection === "down" ? "Scroll to Bottom" : "Scroll to Top"
        }
      >
        {scrollDirection === "down" ? (
          <FaArrowDown size={20} />
        ) : (
          <FaArrowUp size={20} />
        )}
      </button>

      {/* App Routes */}
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PagenotFound />} />
            <Route index element={<Homepage />} />
            <Route path="/aboutus" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            {/* Add more routes here */}
            {/* Services parent route */}
            <Route path="/services" element={<ServicePage />}>
              <Route path="fullstack" element={<SoftwareDevelopment />} />
              {/* <Route path="robotics" element={<Robotics />} />
          <Route path="embedded" element={<Embedded />} />
          <Route path="software-engineering" element={<SoftwareEngineering />} />
          <Route path="digital-literacy" element={<DigitalLiteracy />} />
          <Route path="projects" element={<Projects />} /> */}
            </Route>
            <Route path="/fullstack" element={<SoftwareDevelopment />} />
            <Route path="/embedded" element={<EmbeddedRoboticsLanding />} />
            <Route
              path="/software-engineering"
              element={<SoftwareEngineeringPrinciples />}
            />
            <Route
              path="digital-literacy"
              element={<DigitalLiteracyITFoundations />}
            />
            <Route path="projects" element={<HandsonProjectLearning />} />
            <Route path="/robotics" element={<RoboticsAutomation />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
