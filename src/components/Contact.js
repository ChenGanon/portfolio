import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
      errors: {
        name: "",
        email: "",
        message: ""
      }
    };
  }

  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length < 2 ? "Name must be 2 characters long!" : "";
        break;
      case "email":
        errors.email = this.validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      case "message":
        errors.message =
          value.length < 8 ? "Message must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    const { name } = this.state;
    const { email } = this.state;
    const { message } = this.state;

    return (
      <main>
        <section className="contact">
          <h2>CONTACT ME</h2>
          <form
            action="POST"
            data-netlify="true"
            className="size"
            autoComplete="off"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                  onChange={this.handleChange}
                  noValidate
                ></textarea>
              </div>
            </div>
            {errors.name.length > 0 && name !== "" ? (
              <span style={{ color: "red" }} className="error">
                {errors.name}
              </span>
            ):null}
            <br />
            {errors.email.length > 0 && email !== "" ? (
              <span style={{ color: "red" }} className="error">
                {errors.email}
              </span>
            ):null}
            <br />

            {errors.message.length > 0 && message !== "" ? (
              <span style={{ color: "red" }} className="error">
                {errors.message}
              </span>
            ):null}
            
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  className="button primary submit"
                  value="Send Message"
                />
              </li>
            </ul>
            <div className="field">
              <div data-netlify-recaptcha="true"></div>
            </div>
          </form>
        </section>
      </main>
    );
  }
}
export default Contact;
