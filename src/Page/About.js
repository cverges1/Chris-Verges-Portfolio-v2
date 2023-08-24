import React from "react";
import me from "../assets/Myself.jpg";

const About = () => {
  return (
    <>
      <div className="d-flex align-items-center projects about">
        <img src={me} alt="Myself" className="img-fluid w-25" id="me" />
        <div className="row">
        <p className="text-center">
          I'm so glad you made it here! My name is Chris and I am a developer
          based out of Phoenix, Arizona. I began my web developement journey in March of 2023 and am expecting to graduate from the
          University of Arizona's Full Stack Web Design and Software Development
          Bootcamp on September 5th.  
        </p>
        <p className="text-center">
I am seeking a job in developement and as a diligent worker, eager learner and consumate professional will be able to positively impact a company immediately.</p>
        </div>
      </div>
      <p>
        If I am not developing software you can expect to find me outside enjoying Arizona's vast trail system. As an avid hiker and landscape artist the outdoors are where I feel most at home and I love spending time put miles under my feet and then painting the beautiful sights I have seen.
      </p>
    </>
  );
};

export default About;
