import React, { useEffect, useState } from "react";
import "./components/Skills/skills.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Home/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact/Contact";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Intro from "./components/intro/Intro";
function App() {
  const [skill, setSkill] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
   
  }, []);
  setTimeout(() => {
    setIsLoad(false)
  }, 4000);
  return (
    <>
      {isLoad ? (
        // <Box
        //   sx={{
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     // mt: "10%",
        //     height:'100vh',
        //     bgcolor:'#110016'
        //   }}
        // >
        //   <motion.div
        //     style={{ width: "300px", height: "300px", backgroundColor: "#7B68EE" ,  display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",}}
        //     animate={{
        //       scale: [1, 2, 2, 1, 1],
        //       rotate: [0, 0, 180, 180, 0],
        //       borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        //     }}
        //     transition={{
        //       duration: 4,
        //       ease: "easeInOut",
        //       times: [0, 0.2, 0.5, 0.8, 1],
        //       repeat: Infinity,
        //       repeatDelay: 1,
        //     }} // Animation duration
        //   >
        //     <Typography variant="h3" color={'black'}>Greetings!</Typography>
        //   </motion.div>
        // </Box>
        <Intro/>
      ) : (
        <>
          <div
            className={`top-icon ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
          >
            <ArrowUpwardIcon fontSize="35px" />
          </div>
          <div>
            <Navbar setSkill={setSkill} />

            <Home />
          </div>
          <div data-aos="fade-down">
            <Projects />
          </div>

          <div data-aos="fade-up">
            <Skills skill={skill} />
          </div>
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
