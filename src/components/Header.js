import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="container">
      <header>
        <div className="size">
          <h1>
            Hi I'm Chen, <span>Junior Front-end Developer </span>
          </h1>
          <h2>
            Graduate Bsc in information system.<br/>
             Looking for a Front End development job
          </h2>
          <nav>
            <ul id="nav">
              <Link
                // exact
                to="/"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => props.handleClass("about")}
              >
                <li
                  className={props.class === "about" ? "active" : "no-active"}
                  id="about"
                >
                  About
                </li>
              </Link>
              <Link
                // exact
                to="/projects"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => props.handleClass("projects")}
              >
                <li
                  className={
                    props.class === "projects" ? "active" : "no-active"
                  }
                  id="project"
                >
                  Projects
                </li>
              </Link>
              <Link
                // exact
                to="/skills"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => props.handleClass("skills")}
              >
                <li
                  className={props.class === "skills" ? "active" : "no-active"}
                  id="skills"
                >
                  Skills
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
