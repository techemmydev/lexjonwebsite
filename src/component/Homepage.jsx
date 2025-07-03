import React from "react";
import Herosection from "./Herosection";
import DiscoverOurStory from "./DiscoverOurStory";

import Testimonial from "./Testimonial";
import Stats from "./Stats";
import EventServices from "./EventServices";
import Companieslogo from "./Companieslogo";
import CTASections from "./CTASections";
import Workflow from "./workflow";
const Homepage = () => {
  return (
    <div>
      <Herosection />
      <DiscoverOurStory />
      <EventServices />
      <Companieslogo />
      <CTASections />
      <Stats />
      <Testimonial />
      <Workflow />
    </div>
  );
};

export default Homepage;
