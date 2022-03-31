import Logo from "../../assets/img/logo.png";

import "./styles.css";

function Navbar() {
  return (
    <header>
      <div className="header--navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
            <span>Weather App</span>
          </a>
        </div>
        <div className="social--medias">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rafael-moura-dev/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Rafa-Moura"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
