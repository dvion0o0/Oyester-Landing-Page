import React from "react";
import HeroImg from "../assets/hero.svg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Hero() {
  return (
    <section className="hero section-center">
      <Slide right>
        <img src={HeroImg} alt="hero" className="hero-img" />
      </Slide>
      <div className="hero-content">
        <Slide cascade>
          <Fade left>
            <h1>
              Making the most of the ever-growing{" "}
              <span>Information Technology</span>
            </h1>
          </Fade>
          <h3>
            Managed by a a team of professional experts with extensive
            experience and impressice track records
          </h3>
          <Zoom>
            <button className="btn hero-btn">read more</button>
          </Zoom>
        </Slide>
      </div>
    </section>
  );
}

export default Hero;
