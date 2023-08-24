import React from "react";
import prework from "../../../assets/phase1/prework.png";
import horiseon from "../../../assets/phase1/horiseon.png";
import passwordGen from "../../../assets/phase1/password-generator.png";
import codingQuiz from "../../../assets/phase1/timed-coding-quiz.png";
import workDay from "../../../assets/phase1/work-day.png";
import weather from "../../../assets/phase1/weather-app.png";

const PhaseOne = () => {
    return (
      <div className="d-flex justify-content-center align-items-center projects" style={{ minHeight: "100vh" }}>
        <div id="carouselExample" className="carousel slide mx-auto">
        <h2>Assignments from Phase 1 of Bootcamp</h2>
        <h5>Front End Development</h5>
        <div className="carousel-inner projects-inner">
          <div className="carousel-item active">
            <section className="box" id="box-1">
              <h3 className="text-center">Prework Study Guide</h3>
              <div className="d-flex justify-content-center">
                <img
                  src={prework}
                  alt="screenshot of my first web application"
                  className="img-fluid rounded"
                />
              </div>
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
              <h3 className="text-center">Horiseon Code Refactor</h3>
              <div className="d-flex justify-content-center">
              <img
                src={horiseon}
                alt="screenshot of a webpage for which I refeactored code"
                className="img-fluid rounded"
              />
              </div>
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
              <h3 className="text-center">Unique Password Generator</h3>
              <div className="d-flex justify-content-center">
              <img
                src={passwordGen}
                alt="screenshot of the password Generator application"
                className="img-fluid rounded"
              />
              </div>
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
              <h3 className="text-center">Timed Coding Quiz</h3>
              <div className="d-flex justify-content-center">
              <img
                src={codingQuiz}
                alt="screenshot of the timed coding Quiz"
                className="img-fluid rounded"
              />
              </div>
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
              <h3 className="text-center">Work Day Scheduler</h3>
              <div className="d-flex justify-content-center">
              <img
                src={workDay}
                alt="screenshot of the Work Day Scheduler"
                className="img-fluid rounded"
              />
              </div>
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
              <h3 className="text-center">Weather Dashboard</h3>
              <div className="d-flex justify-content-center">
              <img
                src={weather}
                alt="screenshot of the weather dashboard"
                className="img-fluid rounded"
              />
              </div>
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
      </div>
    )
}

export default PhaseOne;