import React from "react";
import "./style.css";

const Page = () => {
  return (
    <div className="main-container">
      <div id="carouselExample" className="carousel slide col-md-9 mx-auto">
        <h2>Assignments from Phase 1 of Bootcamp</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section className="box" id="box-1">
              <h3>Bootcamp Study Guide</h3>
              <img
                src="prework.png"
                alt="screenshot of my first web application"
                className="img-fluid rounded d-block"
              />
              <p>
                This is my first ever web application, built before the bootcamp
                began. It was created to act as a study guide for the prework
                phase of the bootcamp for myself and future students.
              </p>
              <a href="https://cverges1.github.io/prework-study-guide/">
                Click here to visit the Prework Study Guide!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3>Horiseon Code Refactor</h3>
              <img
                src="horiseon.png"
                alt="screenshot of a webpage for which I refeactored code"
                className="img-fluid rounded max-width: 50%"
              />
              <p>
                I was tasked with refactoring the HTML elements in this code to
                follow best semantic naming practices.
              </p>
              <a href="https://cverges1.github.io/Horiseon-Code-Refactor/">
                Click here to visit the Horiseon Code Refactor!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3>Unique Password Generator</h3>
              <img
                src="password-generator.png"
                alt="screenshot of the password Generator application"
                className="img-fluid rounded max-width: 50%"
              />
              <p>
                This application was my introduction to JavaScript. I was tasked
                with adding the functionality to the HTML and CSS for the page.
              </p>
              <a href="https://cverges1.github.io/Password-Generator-Refacator/">
                Click here to visit the Unique Password Generator!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3>Timed Coding Quiz</h3>
              <img
                src="timed-coding-quiz.png"
                alt="screenshot of the timed coding Quiz"
                className="img-fluid rounded max-width: 50%"
              />
              <p>
                The timed coding quiz is an application that quizzes users on
                their JavaScript knowledge. Users have 1 minute to answer
                questions. If you get a question wrong 10 seconds are subtracted
                from your time. Your time at the end is your score.
              </p>
              <a href="https://cverges1.github.io/Timed-Coding-Quiz/">
                Click here to visit the Timed Coding Quiz!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3>Work Day Scheduler</h3>
              <img
                src="work-day.png"
                alt="screenshot of the Work Day Scheduler"
                className="img-fluid rounded max-width: 50%"
              />
              <p>
                This application is a schedule planner for a work day. The HTML
                was provided to me and I added the functionality using jQuery.
              </p>
              <a href="https://cverges1.github.io/Schedule-Planner-Third-Party-API/">
                Click here to visit the Work Day Scheduler!
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3>Weather Dashboard</h3>
              <img
                src="weather-app.png"
                alt="screenshot of the weather dashboard"
                className="img-fluid rounded max-width: 50%"
              />
              <p>
                This application provides users with the weather for a city they
                search and saves the city into the local storage of the user's
                browser. This application was required to use the OpenWeather
                API.
              </p>
              <a href="https://cverges1.github.io/Server-API-Weather-Dashboard/">
                Click here to visit the Weather Dashboard!
              </a>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
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
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="carouselExample1" className="carousel slide col-md-9 mx-auto">
        <h2>Assignments from Phase 2 of Bootcamp</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3>README Generator</h3>
              <img
                src="README.jpg"
                alt="Glasses in front of code on computer screens"
                className="img-fluid rounded max-width: 50%"
              />
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
              <h3>Logo Generator</h3>
              <img
                src="logo.jpg"
                alt="colorful, circular shapes"
                className="img-fluid rounded max-width: 50%"
              />
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
              <h3>Note Taker Application</h3>
              <img
                src="express-note.png"
                alt="screenshot of the note taker homepage"
                className="img-fluid rounded max-width: 50%"
              />
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
              <h3>Example Company CMS</h3>
              <img
                src="CMS.jpg"
                alt="colorful, circular shapes"
                className="img-fluid rounded max-width: 50%"
              />
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
              <h3>Ecommerce Back End</h3>
              <img
                src="ecommerce.jpg"
                alt="man who appears to be online shopping"
                className="img-fluid rounded max-width: 50%"
              />
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
              <h3>Tech Blog</h3>
              <img
                src="tech-blog.png"
                alt="screenshot of tech blog homepage"
                className="img-fluid rounded max-width: 50%"
              />
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

      <div id="carouselExample2" className="carousel slide col-md-9 mx-auto">
        <h2>Assignments from Phase 3 of Bootcamp</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3>Regular Expression Tutorial</h3>
              <img
                src="regex.jpg"
                alt="screenshot of tutorial homepage on github Gist"
                className="img-fluid rounded max-width: 50%"
              />
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
              <h3>Social Network API</h3>
              <img
                src="social-network.jpg"
                alt="screenshot of a e-commerce application called Happy Tails Pet Supply"
                className="img-fluid rounded max-width: 50%"
              />
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

      <div id="carouselExample3" className="carousel slide col-md-9 mx-auto">
        <h2>Group Projects from the Bootcamp</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section className="box">
              <h3>City Capers</h3>
              <img
                src="city-capers.png"
                alt="screenshot of a travel guide application called City Capers"
                className="img-fluid rounded max-width: 50%"
              />
              <a href="https://alugo0823.github.io/travel-guide-api/">
                A travel guide to help you find things to do in a city
              </a>
            </section>
          </div>
          <div className="carousel-item">
            <section className="box">
              <h3>Happy Tails Pet Supply</h3>
              <img
                src="updated-main.png"
                alt="screenshot of a e-commerce application called Happy Tails Pet Supply"
                className="img-fluid rounded max-width: 50%"
              />
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

export default Page;
