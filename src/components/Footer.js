import React from "react";
import Logo from "../assets/Logo.svg";
import Android from "../assets/companies1.jpg";
import Blackberry from "../assets/companies2.jpg";
import Apple from "../assets/companies3.jpg";
import Java from "../assets/companies4.jpg";
import DotNet from "../assets/companies5.jpg";
import Microsoft from "../assets/companies6.jpg";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer className="section-center">
      <div className="address">
        <Fade cascade big>
          <img src={Logo} alt="logo" className="footer-logo logo" />
          <h4>PT Dwidasa Samsara</h4>
          <h4>
            Ruko Jalur Sutera 29A No. 52 <br />
            Alam Suter Serpong, Tangerang 15323
          </h4>
        </Fade>
      </div>
      <div className="contact">
        <Fade bottom cascade>
          <h4>Contact</h4>
          <h4>Phone: +62.21.5314.1135</h4>
          <h4>Fax: +62.21.5314.1135</h4>
          <h4>Email: community@dwidasa.com</h4>
        </Fade>
      </div>
      <div className="companies">
        <Fade cascade right>
          <img src={Microsoft} alt="" />
          <img src={DotNet} alt="" />
          <img src={Java} alt="" />
          <img src={Apple} alt="" />
          <img src={Android} alt="" />
          <img src={Blackberry} alt="" />
        </Fade>
      </div>
    </footer>
  );
}

export default Footer;
