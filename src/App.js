import React, { useEffect, useState } from "react";
import './components/Skills/skills.css'
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Home/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from "./components/Contact/Contact";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  const [skill, setSkill] = useState(false);


 
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <div
      className={`top-icon ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon fontSize="35px"/>
    </div>
     <div data-aos='fade-right'>
     
      <Navbar setSkill={setSkill} />
     
    
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
