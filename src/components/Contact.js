import React, { Component } from "react";

class Contact extends Component {
  

  render() {
   

    return (
      <main>
        <section className="contact">
          <h2>CONTACT ME</h2>
          <div className="box-info">
            <div className="box">
              <a href="mailto:ganonchen@gmail.com">
                <i className="box-icon fas fa-envelope"></i>
              </a>
              <p> ganonchen@gmail.com</p>
            </div>
            <div className="box">
              <a href="tel:0508198939">
                <i className="box-icon fas fa-phone"></i>
              </a>
              <p>050-819-8939</p>
            </div>
            <div className="box">
              <a href="https://api.whatsapp.com/send?phone=9720508198939">
                <i className="box-icon fab fa-whatsapp"></i>
              </a>
              <p>Send Whatsapp</p>
            </div>
            <div className="box">
              <a href="https://github.com/ChenGanon"  target="_blank">
                <i className="box-icon fab fa-github"></i>
              </a>
              <p>My Github </p>
            </div>
          </div>
          

        </section>
      </main>
    );
  }
}
export default Contact;
