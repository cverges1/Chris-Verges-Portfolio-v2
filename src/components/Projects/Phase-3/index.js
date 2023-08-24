import React from "react";
import regex from "../../../assets/phase3/regex.jpg";
import socialNetwork from "../../../assets/phase3/social-network.jpg";

const PhaseThree = () => {
    return (
      <div className="d-flex justify-content-center align-items-center projects" style={{ minHeight: "100vh" }}>
        <div id="carouselExample2" className="carousel slide mx-auto">
        <h2>Assignments from Phase 3 of Bootcamp</h2>
        <h5>Modern Technologies and Frameworks</h5>
        <div className="carousel-inner projects-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3 className="text-center">Regular Expression Tutorial</h3>
              <div className="d-flex justify-content-center">
              <img
                src={regex}
                alt="screenshot of tutorial homepage on github Gist"
                className="img-fluid rounded"
              />
              </div>
              <p>
                A Github Gist tutorial explaining Regular Expressions. This
                tutorial uses an email validation regex as an example.
              </p>
              <a href="https://gist.github.com/cverges1/b527db0010c31359f711fdf280151ad2">
                Click here to visit the Ecommerce Back End!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Social Network API</h3>
              <div className="d-flex justify-content-center">
              <img
                src={socialNetwork}
                alt="screenshot of a e-commerce application called Happy Tails Pet Supply"
                className="img-fluid rounded"
              />
              </div>
              <p>
                This project is the Back End for a Social Media Application. The
                Social Network API is my first project using a noSQL database
                and uses node.js, express.js, MongoDB and mongoose.
              </p>
              <a href="https://github.com/cverges1/Social-Network-API">
                Click here to visit the Social Network API!
              </a>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample2"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample2"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>      
      </div>
    )
};

export default PhaseThree;