import React from "react";
import Herosection from "../component/Herosection";
import DiscoverOurStory from "../component/DiscoverOurStory";

import Testimonial from "../component/Testimonial";
import Stats from "../component/Stats";
import EventServices from "../component/EventServices";
// import Companieslogo from "../component/Companieslogo";
import CTASections from "../component/CTASections";
import Workflow from "../component/workflow";
import CoreValues from "@/component/OurcoreValue";
const Homepage = () => {
  return (
    <div>
      <Herosection />
      <DiscoverOurStory />
      <CoreValues />
      <EventServices />
      {/* <Companieslogo /> */}
      <CTASections />
      <Stats />
      <Testimonial />
      <Workflow />
    </div>
  );
};

export default Homepage;
