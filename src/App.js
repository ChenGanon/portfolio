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
    if (name === "about") {
      this.setState({
        class: "about"
      });
    }
    if (name === "projects") {
      this.setState({
        class: "projects"
      });
    }
    if (name === "skills") {
      this.setState({
        class: "skills"
      });
    }
  };

  render() {
    return (
      <div className="App">
        
        <Router>
          <Header class={this.state.class} handleClass={this.handleClass} />

          <div>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/skills" component={Skills} />
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
