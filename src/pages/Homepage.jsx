import React from "react";
import Herosection from "../component/Herosection";
import DiscoverOurStory from "../component/CourseDetails";

// import Testimonial from "../component/Testimonial";
import Stats from "../component/Stats";
import EventServices from "../component/EventServices";
// import Companieslogo from "../component/Companieslogo";
import CTASections from "../component/CTASections";
import Workflow from "../component/workflow";
import ServiceSlides from "@/component/Nwe";

import Robotic from "@/component/Robotic";
import Backgrounoverlay from "@/component/Backgrounoverlay";
import Whoare from "@/component/Whoare";
import FeatureGrid from "../component/EventServices";
import ClientSection from "@/component/OurExpertise";
// import CoreValues from "@/component/OurcoreValue";
const Homepage = () => {
  return (
    <div>
      <Herosection />
      <div className="mt-0 relative z-20 lg:-mt-50">
        <FeatureGrid />
      </div>
      <Whoare />
      <Stats />
      <Robotic />
      <ServiceSlides />
      <ClientSection />
    </div>
  );
};

export default Homepage;
