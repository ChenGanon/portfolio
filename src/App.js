import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "about"
    };
  }

  handleClass = name => {
    switch (name) {
      case "about":
        this.setState({
          class: "about"
        });
        break;
        case "projects":
            this.setState({
              class: "projects"
            });
            break
        case "skills":
            this.setState({
              class: "skills"
            });
            break;
      default:
        break;
    }

  };

  render() {
    return (
      <div className="App">
        
        <Router>
        
          <Header class={window.location.pathname} handleClass={this.handleClass} />

          <div>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path='*' component={About}/>

            </Switch>
          </div>
          <Contact />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
