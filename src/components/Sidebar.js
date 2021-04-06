import React from "react";
import {
  FaCaretDown,
  HiOutlineHome,
  AiOutlineMail,
  IoShareSocial,
} from "react-icons/all";
import Zoom from "react-reveal/Zoom";

function Sidebar({ show }) {
  return (
    <Zoom>
      <aside className={`${show ? "sidebar active" : "sidebar"}`}>
        <div className="section-center">
          <ul className="side-links">
            <li>
              <a href="/" className="side-link">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="side-link">
                Product
              </a>
            </li>
            <li>
              <a href="/" className="side-link">
                Technology
              </a>
            </li>
            <li>
              <a href="/" className="side-link">
                About <FaCaretDown />
              </a>
            </li>
            <li>
              <a href="/" className="side-link">
                Client <FaCaretDown />
              </a>
            </li>
            <li>
              <a href="/" className="side-link">
                Partner
              </a>
            </li>
          </ul>
          <ul className="side-social-links">
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
        </div>
      </aside>
    </Zoom>
  );
}

export default Sidebar;
