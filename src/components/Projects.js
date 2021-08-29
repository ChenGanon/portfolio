import React, { Component } from "react";
import Project from "./Project";
import mytrip from "../images/myTrip.png";
import timeIsUp from "../images/time-is-up.PNG";
import snake from "../images/snake.PNG";
import news from "../images/news.PNG";
import portfolio from "../images/portfolio.PNG";
import weather from "../images/weather.PNG";
import metukanet from "../images/metukanet.PNG";

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
          website: null,
          imageIndex: 0
        },
        {
          title: "TIME IS UP",
          image: [timeIsUp, "https://time-is--up.herokuapp.com/"],
          content:
            "A web app that keeps track on expiration dates of products and items. The system displays the time until the expiration of the item that the user enters according to different categories",
          language: "ReactJS, Redux, NodeJS, HTML, CSS, Bootstrap.",
          github: null,
          website: "https://time-is--up.herokuapp.com/",
          imageIndex: 0
        },
        {
          title: "METUKANET",
          image: [metukanet],
          content: "Online Store - Setting up an online store on Wordpress with a woocommerce plugin. Project included designing, optimizing images and adapting the site to the needs of the store.",
          language: "HTML, CSS, WordPress, Woocommerce.",
          github: null,
          website: "https://metukanet.co.il",
          imageIndex: 0
        },
        {
          title: "MY PORTFOLIO",
          image: [portfolio],
          content: "My portfolio website.",
          language: "ReactJS, HTML, CSS, JavaScript",
          github: "https://github.com/ChenGanon/portfolio",
          website: null,
          imageIndex: 0
        },
        {
          title: "NEWS APP",
          image: [news],
          content: "Real-time news app using with REST API-'newsAPI'",
          language: "ReactJS ,HTML, CSS, Bootstrap.",
          github: "https://github.com/ChenGanon/news",
          website: null,
          imageIndex: 0
        },
        {
          title: "WEATHER APP",
          image: [weather, "https://weather-reactapp.netlify.com/"],
          content: "Real-time weather app using with REST API",
          language: "ReactJS ,HTML, CSS.",
          github: "https://github.com/ChenGanon/weather",
          website: "https://weather-reactapp.netlify.com/",
          imageIndex: 0
        },
     
        // {
        //   title: "SNAKE GAME",
        //   image: [snake],
        //   content: "",
        //   language: "ReactJS ,HTML, CSS.",
        //   github: "https://github.com/ChenGanon/snake-game",
        //   website: "https://reactapp-snake-game.netlify.app/",
        //   imageIndex: 0
        // }
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
