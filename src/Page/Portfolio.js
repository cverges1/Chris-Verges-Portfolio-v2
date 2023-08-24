import React from "react";
import PhaseOne from "../components/Projects/Phase-1";
import PhaseTwo from "../components/Projects/Phase-2";
import PhaseThree from "../components/Projects/Phase-3";
import Group from "../components/Projects/Group";


const Portfolio = () => {
  return (
    <div className="main-container">
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <Group />
      </div>
  );
};

export default Portfolio;
