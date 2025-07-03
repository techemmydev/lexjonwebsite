import React from "react";
import Herosection from "./Herosection";
import DiscoverOurStory from "./DiscoverOurStory";

import Testimonial from "./Testimonial";
import Stats from "./Stats";
import EventServices from "./EventServices";
import Companieslogo from "./Companieslogo";
import CTASections from "./CTASections";
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
    </div>
  );
};

export default Homepage;
