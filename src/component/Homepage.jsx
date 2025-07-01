import React from "react";
import Herosection from "./Herosection";
import DiscoverOurStory from "./DiscoverOurStory";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Stats from "./Stats";
import EventServices from "./EventServices";

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <DiscoverOurStory />
      <EventServices />
      <Stats />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Homepage;
