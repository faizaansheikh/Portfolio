import React, { useEffect, useState } from "react";
// import "./components/App.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Element } from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Home/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from "./components/Contact/Contact";
function App() {
  const [skill, setSkill] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <>
      <Navbar setSkill={setSkill} />
      <div data-aos='fade-right'>
      <Home />
      </div>
     
      <div data-aos='fade-down'>
      <Projects />
      </div>
      
      <div data-aos='fade-up'>
      <Skills skill={skill} />
      </div>
      <Contact/>
    </>
  );
}

export default App;
