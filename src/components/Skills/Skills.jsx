import React, { useEffect, useState } from "react";
import "./skills.css";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from 'd3-ease';
function Skills() {
  
  const styling = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontFamily: "'Dancing Script', cursive",
    fontFamily: "'Edu VIC WA NT Beginner', cursive",
    fontFamily: "'Indie Flower', cursive",
    fontFamily: "'Lobster', cursive",
    fontFamily: "'Oswald', sans-serif",
    fontFamily: "'Teko', sans-serif",
    fontFamily: "'ZCOOL QingKe HuangYou', sans-serif",
    letterSpacing: "2px",
    color: "#fff",
    fontSize: "30px",
    textAlign: "center",
  };
  const stylingTwo = {
    fontFamily: "'Oswald', sans-serif",
    textAlign: "center",
    color: "white",
    p: "15px",
    fontWeight: "400",

    letterSpacing: "0.5px",
    wordSpacing: "0.5px",
    fontSize: { xs: "12px", md: "16px" },
  };
  const lang = [
    { title: "HTML 5", per: 85 },
    { title: "CSS 3", per: 75 },
    { title: "React Js", per: 80 },
    { title: "Next Js", per: 70 },
    { title: "Javascript", per: 85 },
    { title: "Node Js", per: 40 },
  ];

  return (
    // <div className="skills-section" id="Skills">
    <Box
      id="Skills"
      sx={{
        //  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,9,60,0.9248949579831933) 49%, rgba(7,2,23,1) 98%)',
        backdropFilter: "saturate(180%) blur(10px)",
        bgcolor: "#111111",
        //  background:' rgba(0,0,0,0.8)',
        height: "auto",
      }}
    >
      <Grid sx={{ display: "flex", justifyContent: "center" }} container>
        <Grid sx={{ mt: "85px" }} item xs={12} md={8}>
          <Typography variant="h5" sx={styling}>
            {"<"}My Skills{"/>"}
          </Typography>
          <Typography sx={stylingTwo}>
            I specialize in crafting dynamic and visually appealing user
            interfaces using a powerful combination of
            <span style={{ color: "#6927aa", fontSize: "18px" }}>
              {" "}
              HTML, CSS, JavaScript, React, Next.js
            </span>{" "}
            and Material-UI libraries. With a keen eye for design and a passion
            for seamless user experiences, I bring creativity and technical
            expertise to every project, ensuring a polished and responsive
            interface that captivates users
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} container>
          {lang.map((el, i) => (
            <Grid
              key={i}
              item
              xs={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection:'column',
                alignItems:'center',
                // p: "0px 25px 0px 25px",
                mb: "60px",
              }}
            >
              
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  mt: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AnimatedProgressProvider
  valueStart={0}
  valueEnd={66}
  duration={1.4}
  easingFunction={easeQuadInOut}
>
  {(value) => {
    const roundedValue = Math.round(value);
    return (
                <CircularProgressbar
                  value={el.per}
                  text={`${el.per}%`}
                  background
                  backgroundPadding={8}
                  styles={buildStyles({
                    backgroundColor: "black",
                    textColor: "#fff",
                    pathColor: "#6927aa",
                    trailColor: "white",
                    textSize: "10px", // Adjust the text size as needed
                    // pathTransitionDuration: 0.5, // Control the animation duration
                    textAlign: "center",
                    pathTransition: 'none'
                    // pathTransitionDuration:1
                  })}
                />
                );
              }}
              </AnimatedProgressProvider>
              </Box>
             <Box>
             <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  {el.title}
                </Typography>
             </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: "50px",
          }}
        ></Box>
      </Grid>
    </Box>
    // </div>
  );
}

export default Skills;
