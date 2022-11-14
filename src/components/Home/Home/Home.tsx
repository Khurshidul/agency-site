import React from "react";
import Ad from "../Ad/Ad";
import Ad2 from "../Ad2/Ad2";
import Banner from "../Banner/Banner";
import Slide from "../Slide/Slide";

interface PropTypes {}

const Home: React.FC<PropTypes> = () => {
  return (
    <div>
      <Banner />
      <Ad />
      <Ad2 />
      <Slide />
    </div>
  );
};

export default Home;
