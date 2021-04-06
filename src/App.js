import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Swing from "react-reveal/Swing";

function App() {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar toggle={Toggle} />
      <Sidebar show={show} />
      <Hero />
      <About />
      <Services />
      <Footer />
      <div className="copyright">
        <Swing>
          <p>
            Copyright &copy; {new Date().getFullYear()} - Dwidasa Samsara
            Indonesia
          </p>
        </Swing>
      </div>
    </>
  );
}

export default App;
