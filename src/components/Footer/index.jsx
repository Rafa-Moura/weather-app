import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer>
      <h4>Weather App</h4>
      <p>Desenvolvido por Rafael Moura</p>
      <div className="social--medias">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rafael-moura-dev/">
          <i className="bi bi-linkedin" ></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Rafa-Moura">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
