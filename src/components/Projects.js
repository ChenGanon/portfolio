import React, { Component } from "react";
import Project from "./Project";
import mytrip from '../images/myTrip.png'
import news from '../images/news.PNG'
import portfolio from '../images/portfolio.PNG'
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectss: [
        {
          title: "MY TRIP",
          image: mytrip,
          content:
            "Android application myTrip for cost-adjusted trip planning and route. This is the final project in BSC in Information Systems.",
          language: null,
          link: null
        },
        {
          title: "MY PORTFOLIO",
          image: portfolio,
          content: "My portfolio website.",
          language: "HTML, CSS, JavaScript",
          link: null
        },
        {
          title: "NEWS APP",
          image: news,
          content: "Real-time news app used with REST API-'newsAPI'",
          language: "Angular,HTML, CSS, Bootstrap, node.js(express)",
          link: "https://news--app.herokuapp.com/"
        }
      ]
    };
  }

  render() {
    return (
      <main>
        <section className="project" id="tab-project">
          <h2>PROJECTS</h2>
          <div className="containerS" id="containerS">
            {this.state.projectss.map(projectt => (
              <Project key={projectt.title} projects={projectt} />
            ))}
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
