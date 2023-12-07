import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
// import "../Home/home.css";
import cover from '../images/about1.jpg'
function About() {
  return (
    <>
 
      <Box
        id="about"
        sx={{
          // backgroundImage: `url(${cover})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: 'cover',
          // filter: 'brightness(30%)'
          // bgcolor:'#080942'
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(67,9,121,0.9248949579831933) 41%, rgba(64,3,249,0.633578431372549) 97%)',
          
        }}
      >
        <Grid
          id="your-section-id"
          sx={{
            // mt: "20px",
            // mb: "20px",
            
          }}
          spacing={2}
          container
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "65vh",
            }}
            item
            xs={12}
            sm={12}
            md={4}
          >
            
            <IconButton
              className="nav-links-about"
              sx={{
                color: "#fff",
                fontSize: "22px",
                fontWeight: "bold",
                pl: "30px",
                fontSize: "45px",
              }}
            >
              {"<"}About{"/>"}
            </IconButton>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
            }}
            item
            xs={12}
            sm={12}
            md={8}
          >
            <Box>
              <Paper
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  color: "whitesmoke",
                  // border: "1px solid rgba(255, 255, 255, 0.3)",
                  padding: "40px",
                  margin: "20px 20px 20px 20px",
                  // width:'300px'
                  // height: "65vh",
                  textAlign: "justify",
                  overFlow: "hidden",
                  whiteSpace: "pre-wrap",
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.5px",
                  wordSpacing: "0.5px",
                  fontSize: {xs:'15px',md:'24px'},
                }}
              >
                I'm a dedicated Frontend developer with a year of hands-on
                experience, presently contributing my skills to the dynamic team
                at Finosys as a Frontend Developer. My passion lies in crafting
                seamless user interfaces and transforming designs from Figma
                into interactive web applications using React/Next.js. In my
                journey so far, I've honed my abilities to bridge the gap
                between design and functionality. My commitment to creating
                intuitive and visually appealing web experiences has been a
                driving force throughout my career. I thrive on the challenges
                of turning concepts into reality, ensuring that the end result
                not only meets but exceeds expectations. Proficient in the
                latest technologies and best practices, I bring a meticulous
                approach to every project. Whether it's optimizing performance,
                ensuring cross-browser compatibility, or implementing responsive
                design, I am committed to delivering top-notch solutions that
                resonate with both clients and end-users.
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* </Box> */}
      {/* </div> */}
    </>
  );
}

export default About;
