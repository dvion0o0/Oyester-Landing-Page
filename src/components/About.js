import React from "react";
import AboutImg from "../assets/pana.svg";
import Slide from "react-reveal/Slide";

function About() {
  return (
    <section className="about">
      <div className="section-center about-center">
        <Slide left>
          <img src={AboutImg} alt="aboutImg" className="hero-img" />
        </Slide>
        <div className="hero-content about-content">
          <Slide cascase right>
            <h1>
              Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span>
            </h1>
            <p>
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
              the founders, who each of them has a common end objective to
              innovate new creations by making the most of the ever-growing
              information technology through <span>DSI</span>’s distinct
              front-end based application concept.
            </p>
            <p>
              Managed by a team of professional experts with extensive
              experience and impressive track records, <span>DSI</span> believes
              that continuous improvements and innovations assure your business
              to run effectively and efficiently.
            </p>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default About;
