import React, { Fragment } from "react";
import {
  SiCodechef,
  SiHackerrank,
  SiCodeforces,
  SiLeetcode,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import "./Resume.css";
function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">
                Gurudatta Kamalakar Gadde
              </h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-3 text-red">
                    Bachelor of Engineering :
                    <br />
                    Information Science and Engineering
                  </h4>
                  <h6 className="blue-label px-2 py-1">2020 - 2024</h6>
                  <p className="m-0">
                    Bangalore Institute of Technology, Bangalore
                  </p>
                  <p>CGPA: 9.10</p>
                </li>
                <li>
                  <h4 className="ff-jose my-3 text-red">
                    Pre-University( PU ) :
                    <br />
                    Science (Computer Science)
                  </h4>
                  <h6 className="blue-label px-2 py-1">2018 - 2020</h6>
                  <p className="m-0">MES PU College, Sirsi</p>
                  <p>96.00%</p>
                </li>
                <li>
                  <h4 className="ff-jose my-3 text-red">SSLC</h4>
                  <h6 className="blue-label px-2 py-1">2018</h6>
                  <p className="m-0">Sevasagar High School, Sagar</p>
                  <p>97.12%</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROFILE</h4>
              <div>
                <a
                  href="https://github.com/datta1054"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <h1>
                    <AiFillGithub className="zoom-on-hover" />
                  </h1>
                  &#160; &#160; &#160; <span> Github Page</span>
                </a>
              </div>
              <div>
                <a
                  href="https://codeforces.com/profile/gurudatta1455"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <h1>
                    <SiCodeforces className="zoom-on-hover" />
                  </h1>
                  &#160; &#160; &#160; <span>Codeforces : </span>
                </a>
                <span>Solved 150+ problems</span>
              </div>

              <div>
                <a
                  href="https://leetcode.com/gurudatta1455/"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <h1>
                    <SiLeetcode className="zoom-on-hover" />
                  </h1>
                  &#160; &#160; &#160; <span>Leetcode : </span>
                </a>
                <span>Solved 350+ problems</span>
              </div>
              <div>
                <a
                  href="https://www.codechef.com/users/gurudatta1455"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <h1>
                    <SiCodechef className="zoom-on-hover" />
                  </h1>
                  &#160; &#160; &#160; <span>Codechef : </span>
                </a>
                <span>Solved 150+ problems</span>
              </div>
              <div>
                <a
                  href="https://www.hackerrank.com/gurudatta1455"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <h1>
                    <SiHackerrank className="zoom-on-hover" />
                  </h1>
                  &#160; &#160; &#160; <span>Hackerrank : </span>
                </a>
                <span>
                  Hackerrank : 3<BsStarFill /> in Java , C++, C , SQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
