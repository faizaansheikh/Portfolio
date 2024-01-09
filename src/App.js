import React, { useState } from "react";
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
function App() {

  return (
    <>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Projects />
      <Skills />
    </>
  );
}

export default App;
