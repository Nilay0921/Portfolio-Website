import React from 'react';
import "./App.css";
import About from "./components/about"
import Exp from "./components/exp"
import Projects from "./components/projects"
import Contact from "./components/contact"
import resume from "./Resume.pdf"

function App() {
  return (
    <div className="app">
      <div className="topnav">
        <a href="#about">About</a>
  	    <a href="#projects">Projects</a>
  	    <a href="#expirence">Experience</a>
  	    <a href="#contact">Contact</a>
  	    <a href={ resume }>Resume</a>	
      </div>
      <div className="name">
        <h1>Nilay Kapadia</h1>
      </div>
      <div className="about-pad" id="about">
        <About />
      </div>
      <div className="exp-pad" id="expirence">
        <Exp />
      </div>
      <div className="project-pad" id="projects">
        <Projects />
      </div>
      <div className="contact-pad" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
