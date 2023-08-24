import React from "react";
import cityCapers from "../../../assets/group/city-capers.png";
import happyTails from "../../../assets/group/updated-main.png";

const Group = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center projects"
      style={{ minHeight: "100vh" }}
    >
      <div id="carouselExample3" className="carousel slide mx-auto">
        <h2>Group Projects from the Bootcamp</h2>
        <h5>Team Projects throughout the Bootcamp</h5>
        <div className="carousel-inner projects-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3 className="text-center">City Capers</h3>
              <div className="d-flex justify-content-center">
                <img
                  src={cityCapers}
                  alt="screenshot of a travel guide application called City Capers"
                  className="img-fluid rounded"
                />
              </div>
              <p>
                This group project gives users a variety of things to do in a
                city. It is built using the geoapify API and the ticketmaster
                API to provide the things to do. Please reach out for my
                specific contributions or see the applications repository.
              </p>
              <a href="https://alugo0823.github.io/travel-guide-api/">
                Click here to visit City Capers!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Happy Tails Pet Supply</h3>
              <div className="d-flex justify-content-center">
                <img
                  src={happyTails}
                  alt="screenshot of a e-commerce application called Happy Tails Pet Supply"
                  className="img-fluid rounded"
                />
              </div>
              <p>
                This project is an example ecommerce website for pet supplies.
                This full stack application uses node.js, express.js, mysql,
                sequilize, handlebars, CSS and Google Analytics. Please reach
                out for my specific contributions or see the applications
                repository.
              </p>
              <a href="https://happy-tails-pet-supply-e05726b13b79.herokuapp.com/">
                A Pet Supply Shop so you can get what you need for you four
                legged friend with ease
              </a>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample3"
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
          data-bs-target="#carouselExample3"
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
  );
};

export default Group;
