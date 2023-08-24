import React from "react";
import README from "../../../assets/phase2/README.jpg";
import logo from "../../../assets/phase2/logo.jpg";
import expressImg from "../../../assets/phase2/express-note.png";
import CMS from "../../../assets/phase2/CMS.jpg";
import ecommerce from "../../../assets/phase2/ecommerce.jpg";
import blog from "../../../assets/phase2/tech-blog.png";

const PhaseTwo = () => {
    return (
      <div className="d-flex justify-content-center align-items-center projects" style={{ minHeight: "100vh" }}>
        <div id="carouselExample1" className="carousel slide mx-auto">
        <h2>Assignments from Phase 2 of Bootcamp</h2>
        <h5>Back End Development</h5>
        <div className="carousel-inner projects-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3 className="text-center">README Generator</h3>
              <div className="d-flex justify-content-center">
              <img
                src={README}
                alt="Glasses in front of code on computer screens"
                className="img-fluid rounded"
              />
              </div>
              <p>
                This is a node.js application that runs in the terminal and
                prompts a user with a set of questions and generates a README.md
                based on the user's answers. This application is designed for
                myself and other developers.
              </p>
              <a href="https://github.com/cverges1/README-Generator">
                Click here to visit the README Generator!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Logo Generator</h3>
              <div className="d-flex justify-content-center">
              <img
                src={logo}
                alt="colorful, circular shapes"
                className="img-fluid rounded"
              />
              </div>
              <p>
                This is a node.js application that runs in the terminal and
                prompts a user with a set of questions and generates a simple
                logo based on the user's answers. The application creates a PNG
                file consisting of a shape and a few letters.
              </p>
              <a href="https://github.com/cverges1/Logo-Generator">
                Click here to visit the Logo Generator!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Note Taker Application</h3>
              <div className="d-flex justify-content-center">
              <img
                src={expressImg}
                alt="screenshot of the note taker homepage"
                className="img-fluid rounded"
              />
              </div>
              <p>
                This node.js application lets users take notes and save them to
                their local storage. For this application I was provided with
                the front end and set up the back end using an express.js
                server.
              </p>
              <a href="https://server-note-taker-app.herokuapp.com">
                Click here to visit the Note Taker Application!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Example Company CMS</h3>
              <div className="d-flex justify-content-center">
              <img
                src={CMS}
                alt="colorful, circular shapes"
                className="img-fluid rounded"
              />
              </div>
              <p>
                The Company CMS is an example application to manage a companies
                departments, roles and employees. It is built using node.js and
                a mysql database.
              </p>
              <a href="https://github.com/cverges1/Example-Company-CMS">
                Click here to visit the Example Company CMS!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Ecommerce Back End</h3>
              <div className="d-flex justify-content-center">
              <img
                src={ecommerce}
                alt="man who appears to be online shopping"
                className="img-fluid rounded"
              />
              </div>
              <p>
                This application is an example of a back end for an ecommerce
                store using node.js, express.js, mysql and sequilize. I was
                provided with the file structure for this project but created
                the models and routes.
              </p>
              <a href="https://github.com/cverges1/ecommerce-sequelize-refactor">
                Click here to visit the Ecommerce Back End!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3 className="text-center">Tech Blog</h3>
              <div className="d-flex justify-content-center">
              <img
                src={blog}
                alt="screenshot of tech blog homepage"
                className="img-fluid rounded"
              />
              </div>
              <p>
                The Tech Blog was my first full stack web application. It was
                built using the MVC design pattern and shows everything I had
                learned in the bootcamp up to this point. The technology used is
                node.js, express.js, mysql, sequilize, bootstrap, CSS and
                handlebars.js for the front end framework.
              </p>
              <a href="https://web-dev-tech-blog-a65171408830.herokuapp.com/">
                Click here to visit the Tech Blog!
              </a>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample1"
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
          data-bs-target="#carouselExample1"
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

export default PhaseTwo;