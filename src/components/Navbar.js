import React from "react";
import Logo from "../assets/Logo.svg";
import {
  AiOutlineAlignRight,
  FaCaretDown,
  HiOutlineHome,
  AiOutlineMail,
  IoShareSocial,
} from "react-icons/all";
function Navbar({ toggle }) {
  return (
    <nav>
      <div className="nav-header section-center">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Product
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Technology
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About <FaCaretDown />
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Client <FaCaretDown />
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Partner
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="/" className="social-link">
              <HiOutlineHome />
            </a>
          </li>
          <li>
            <a href="/" className="social-link">
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a href="/" className="social-link">
              <IoShareSocial />
            </a>
          </li>
        </ul>
        <button className="toggle" onClick={toggle}>
          <AiOutlineAlignRight />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
