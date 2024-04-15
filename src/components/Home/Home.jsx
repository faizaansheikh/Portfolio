import React, { useEffect, useState } from "react";
import "./home.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Box, Button } from "@mui/material";
import { FAColor } from "../../theme";
function Home() {
  // const scrollToSection = () => {
  //   let section = false;
  //   section = document.getElementById("your-section-id");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  //   const[showHome,setShowHome] = useState(false)
  //   useEffect(() => {
  //     setShowHome(true)
  //   }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <>
      <div className="home-section" id="Home">
      

        <div className="mains">
          <div className="border-set" data-aos='fade-down'></div>
          <div className="overlay-text" data-aos='fade-right'>
            {/* <img className='logo-img' src={logo} width='18%' alt="" /> */}

            <p className="start-text">{"<Start />"}</p>
            <h2 className="heading-text">
              Hi,I'm <span style={{ color: FAColor }}>Faizaan</span>,
              I design & build user interfaces <br /> and{" "}
              <span className="web"> web applications</span>{" "}
            </h2>
            <p className="start-text">Let me show you...</p>
            <div style={{marginTop:'10px'}}>
         <Link to="Projects" smooth={true} duration={800}>
            <Button sx={{bgcolor:'#10b2a4',color:'white',fontWeight:'500',borderRadius:'19px',px:'16px',py:'8px','&:hover':{bgcolor:'#15998e'}}}>Explore</Button>
          </Link>
         </div>
          </div>
        
        </div>
        {/* <Link to="Projects" smooth={true} duration={800}>
          <div className="more-secton">
            <div className="learn-more">Learn more about what i do</div>
            <div className="learn-more-icon">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </Link> */}
       
      </div>
    </>
  );
}

export default Home;
