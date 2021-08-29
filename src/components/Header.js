import React from "react";
import { Link } from "react-router-dom";


function Header(props) {


  
  return (
    
    <div className="container">
      
      <header>
 
        <div className="size">
          <h1>
            Hi I'm Chen, <span>Junior Full Stack Developer </span>
          </h1>
          <h2>
            Graduate Bsc in information systems.<br/>
             Looking for a Full Stack development job.
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
                  className={window.location.pathname === "/" ? "active" : "no-active"}
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
                    window.location.pathname === "/projects" ? "active" : "no-active"
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
                onClick={() => {props.handleClass("skills")}}
                
              >
                <li
                  className={window.location.pathname === "/skills" ? "active" : "no-active"}
                  
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
