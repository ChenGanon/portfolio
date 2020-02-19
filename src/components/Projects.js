import React, { Component } from "react";
import Project from "./Project";
import mytrip from "../images/myTrip.png";
import news from "../images/news.PNG";
import portfolio from "../images/portfolio.PNG";
import weather from "../images/weather.PNG";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectss: [
        {
          title: "MY TRIP",
          image: [mytrip],
          content:
            // "Android application myTrip for cost-adjusted trip planning and route. This is the final project in BSC in Information Systems."
            "MY TRIP - android application for planning a trip by budget.  AS part of a final project in information systems studies.",
          language: null,
          github: null,
          imageIndex: 0
        },
        {
          title: "MY PORTFOLIO",
          image: [portfolio],
          content: "My portfolio website.",
          language: "ReactJS, HTML, CSS, JavaScript",
          github: "https://github.com/ChenGanon/portfolio",
          imageIndex: 0
        },
        {
          title: "NEWS APP",
          image: [news, "https://news-react-app.netlify.com/"],
          content: "Real-time news app using with REST API-'newsAPI'",
          language: "ReactJS ,HTML, CSS, Bootstrap.",
          github: "https://github.com/ChenGanon/news",
          imageIndex: 0
        },
        {
          title: "WEATHER APP",
          image: [weather, "https://weather-reactapp.netlify.com/"],
          content: "Real-time weather app using with REST API",
          language: "ReactJS ,HTML, CSS.",
          github: "https://github.com/ChenGanon/weather",
          imageIndex: 0
        }
      ],
      index: 0
    };
  }

  change = () => {
    if (this.state.index === 0) {
      this.setState({ index: 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  render() {
    return (
      <main>
        <section className="project" id="tab-project">
          <h2>PROJECTS</h2>
          <div className="containerS" id="containerS">
            {this.state.projectss.map(projectt => (
              <Project
                key={projectt.title}
                projects={projectt}
                index={this.state.index}
                change={this.change}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
