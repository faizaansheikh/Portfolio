import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./projects.css";
import wether from "./images/wether1.JPG";
import hotel from "./images/hotel2.JPG";
import expense from "./images/expense1.JPG";
import quiz from "./images/wether1.JPG";
function Projects() {
  const boxdata = [
    { id: 1, urls: "https://weather-a55d2.web.app/", image: wether, title: "Weather App React" },
    { id: 2, urls: "https://xresort-53b181.netlify.app", image: hotel, title: "Website UI React" },
    { id: 3, urls: "https://expenseappx.netlify.app/", image: expense, title: "Expense App React" },
    { id: 4, urls: "https://xresort-53b181.netlify.app", image: quiz, title: "Quiz App Flutter" },
  ];
  const setwidth = "500px";
  const setheight = "220px";
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
    textAlign: {xs:'center',md:"right"},
    p: "10px",
    letterSpacing: "0.5px",
    wordSpacing: "0.5px",
    fontSize: { xs: "12px", md: "20px" },
  };
  const [isImageVisible, setImageVisible] = useState(null);
  const handleButtonClick = (urls) => {
   
    const url = urls;
    
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="projects-section" id="Projects">
        <Box sx={{ color: "white" }}>
          <Grid container>
            <Grid sx={{ mt: "100px" }} item xs={12} md={4}>
              <Typography variant="h5" sx={styling}>
                {"<"}Projects{"/>"}
              </Typography>
              <Typography variant="h5" sx={stylingTwo}>
                Here are some of my basic projects
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}></Grid>

            {/* ============================================================== */}
            <Grid item xs={12} md={12}>
              <Grid container>
                {boxdata.map((elem, i) => (
                  <Grid
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "20px 0px 20px 0px",
                    }}
                    item
                    xs={12}
                    md={6}
                  >
                    {" "}
                   {/* <a href=""> */}
                   <div
                     onClick={()=>handleButtonClick(elem.urls)}
                      onMouseEnter={() => setImageVisible(elem.id)}
                      onMouseLeave={() => setImageVisible(null)}
                      className={
                        elem.id === 1 || elem.id === 3
                          ? "boxstyle2"
                          : "boxstyle"
                      }
                      // style={boxstyle2}
                    >
                      {isImageVisible ===  elem.id ? (
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={elem.image}
                          alt=""
                        />
                      ) : (
                        <Typography sx={{fontSize:'23px', fontFamily: "'Oswald', sans-serif",color:'#6927aa'}}>{elem.title}</Typography>
                    
                      )}
                    </div>
                   {/* </a> */}
                  </Grid>
                ))}

             
              </Grid>
            </Grid>

            {/* ============================================================== */}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Projects;
