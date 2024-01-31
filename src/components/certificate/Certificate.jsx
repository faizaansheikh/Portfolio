import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./cert.css";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c1 from "../images/c1.png";
import AOS from "aos";
function Certificate() {
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
    pb: "39px",
  };
  const urls = [
    { pic: c2, add: "https://www.hackerrank.com/certificates/68f770a6bb56" },
    {
      pic: c1,
      add: "https://www.freecodecamp.org/certification/Faizaan_sheikh/javascript-algorithms-and-data-structures",
    },
    { pic: c3, add: "https://www.hackerrank.com/certificates/93680aba4050" },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
    
   
  }, []);
  return (
    <>
      <Box
      id='Certificates'
        sx={{
          bgcolor: "#161515",
          height: "100%",

          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          p: "80px",

          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={styling}>
          {"<"}Certificates{"/>"}
        </Typography>
        <Grid
          spacing={8}
          sx={{ p: { xs: "10px 9px 10px 9px", md: "10px 20px 10px 20px" } }}
          container
        >
          {urls.map((el, i) => (
            //   <div key={i} className="box_card">
            <Grid  data-aos= {el.pic === c1 ? "fade-right" : "fade-left"}  key={i} item xs={12} md={4} sx={{'&:hover':{width:'379.06px'}}}>
              <a href={el.add} target="_blank">
                <img
                
                  style={{
                      height: "100%",
                      width: "100%",
                    objectFit: "cover",
                    border: "5px solid green",
                    borderRadius: "15px",
                    boxShadow: "2px 40px 20px 40px black",
                    transition:'transform 0.3s'
                  }}
                  src={el.pic}
                  alt=""
                  onMouseOver={(e)=>{
                    e.target.style.transform = 'scale(1.15)'
                    e.target.style.border = '6px solid #26661d'
                  }}
                  onMouseOut={(e)=>{
                    e.target.style.transform = 'scale(1)'
                    e.target.style.border = '5px solid green'
                  }}
                />
              </a>
            </Grid>
            //   </div>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Certificate;
