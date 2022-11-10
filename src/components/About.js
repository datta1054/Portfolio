import React, { Fragment } from "react";
import "./About.css";
function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr></hr>
                <p className="slide-in-bottom">
                  {/* Ambitious full-stack developer, a self-led learner and teamplayer */}
                  A Third year Engineering student who is well-versed in Web
                  development and problem solving.
                </p>
                <p className="slide-in-bottom">
                  Currently looking for new opportunities in industry and
                  willing<br></br>
                  to work on challenging and diverse projects with the latest
                  technologies and searching for an internship in MERN-stack web
                  development.
                </p>
                <p className="slide-in-bottom">
                  The technology I've worked on :
                  <br />
                  <span className="ls-2">
                    React JS, Node JS, Next JS , Html , Css , Javascript ,
                    Bootstrap .
                  </span>
                </p>
                <p className="slide-in-bottom">
                  Currently Learning React Js Library and the Backend deeply
                </p>
                <a href="mailto:gurudattagadde1054@gmail.com" target="/blank">
                  <button className="butto">Hire me</button>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/About_Page.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
