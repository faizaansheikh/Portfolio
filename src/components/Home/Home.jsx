import React, { useEffect, useState } from "react";
import "./home.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

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
  return (
    <>
      <div className="home-section" id="Home">
      

        <div className="mains">
          <div className="border-set"></div>
          <div className="overlay-text">
            {/* <img className='logo-img' src={logo} width='18%' alt="" /> */}

            <p className="start-text">{"<Start />"}</p>
            <h2 className="heading-text">
              Hi,I'm <span style={{ color: "mediumslateblue" }}>Faizaan</span>,
              I design & build user interfaces <br /> and{" "}
              <span className="web"> web applications</span>{" "}
            </h2>
            <p className="start-text">Let me show you...</p>
          </div>
        </div>
        <Link to="about" smooth={true} duration={800}>
          <div className="more-secton">
            <div className="learn-more">Learn more about what i do</div>
            <div className="learn-more-icon">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
