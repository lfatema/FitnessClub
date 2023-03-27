import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo"></img>
      {menu === false && mobile === true ? (
        <div
          style={{ backgroundColor: "var(--appColor)", padding: "0.5rem" }}
          onClick={() => setMenu(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.7rem", height: "1.2rem", borderRadius: "5px" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenu(false)}
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
