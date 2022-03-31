import Logo from "../../assets/img/logo.png";

import './styles.css'

function Navbar() {
  return (
    <header>
      <div className="logo--navbar">
        <a href="/">
          <img src={Logo} alt="" />
          Weather App
        </a>
      </div>
    </header>
  );
}

export default Navbar;
