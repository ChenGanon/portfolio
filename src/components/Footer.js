import React from "react";

function Footer() {
  return (
    <footer>
      <a href="mailto:ganonchen@gmail.com">
        <i className="fas fa-envelope-square"></i>ganonchen@gmail.com
      </a>
      <a href="tel:0508198939">
        <i className="fas fa-phone-square-alt"></i>050-8198939
      </a>
      <a href="https://api.whatsapp.com/send?phone=9720508198939">
        <i className="fab fa-whatsapp-square"></i>
      </a>
      <div>&copy; by chen ganon </div>
    </footer>
  );
}

export default Footer;
