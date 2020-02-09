import React from "react";

function Skills() {
  return (
    <main>
      <section className="skills" id="tab-skills">
        <h2>SKILLS</h2>
        <div className="boxes">
          <div className="front bs">
            <h3>Front End:</h3>
            <ul>
              <li>
                <i className="devicon-html5-plain-wordmark colored"></i>HTML5
              </li>
              <li>
                <i className="devicon-css3-plain-wordmark colored"></i>
                CSS3
              </li>
              <li>
                <i className="devicon-javascript-plain colored"></i>
                JavaScript
              </li>
 
            </ul>
          </div>
          <div className="back bs">
            <h3>Back End:</h3>
            <ul>
              <li>
                <i className="devicon-nodejs-plain colored"></i>Node.js
              </li>
              <li><i className="devicon-mongodb-plain colored"></i>MongoDB
</li>
<li><i className="devicon-mysql-plain-wordmark colored"></i>SQL
</li>
            </ul>
          </div>
          <div className="framwork bs">
            <h3>Framwork:</h3>
            <ul>
              <li>
                <i className="devicon-bootstrap-plain colored"></i>Bootstrap
              </li>
              <li>
                <i className="devicon-jquery-plain colored"> </i>jQuery
              </li>
              <li>
                <i className="devicon-react-original colored"></i>ReactJS
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
