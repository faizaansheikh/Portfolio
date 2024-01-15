import React, { useEffect } from "react";
import "./contact.css";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Contact() {
  const GlassPaper = styled(Paper)`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    margin: 80px;
    border-radius: 10px;
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
    width:20px
    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
    @media (max-width: 600px) {
      /* Adjust margin for mobile screens */
      margin: 20px;
    }
  
    @media (min-width: 601px) and (max-width: 960px) {
      /* Adjust margin for tablets or smaller screens */
      margin: 40px;
    }
  
    @media (min-width: 961px) {
      /* Default margin for larger screens */
      margin: 80px;
    }
  `;
  const fontFam = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontFamily: "'Dancing Script', cursive",
    fontFamily: "'Edu VIC WA NT Beginner', cursive",
    fontFamily: "'Indie Flower', cursive",
    fontFamily: "'Lobster', cursive",
    fontFamily: "'Oswald', sans-serif",
    fontFamily: "'Teko', sans-serif",
    fontFamily: "'ZCOOL QingKe HuangYou', sans-serif",
  };
  const styling = {
    ...fontFam,
    // letterSpacing: "2px",
    color: "#fff",
    fontSize: { sm: "15px", md: "27px" },
    textAlign:'center',
    pb: "10px",
  };
  const stylingPara = {
    ...styling,
    fontSize: { sm: "12px", md: "22px" },
    textAlign: "justify",
    pb: "10px",
  };
  const exp = [
    "ABC XYZ analysis for supply chain optimization",
    "Collaborated with cross-functional teams to ensure seamless integration of front-end ",
    "Employed cutting-edge technologies such as [mention relevant technologies",
  ];
  const mails = [
    {
      color: "#110C28",
      title: "03323502803",
      link: "https://wa.me/03323502803",
    },
    {
      color: "#110C28",
      title: "Github",
      link: "https://github.com/faizaansheikh",
    },
    {
      color: "#110C28",
      title: "Linkedin",
      link: "https://www.linkedin.com/in/faizaan-imran-711305258/",
    },
    {
      color: "#110C28",
      title: "sheikhfaizaan608@gmail.com",
      link: "https://mail.google.com/",
    },
    {
      color: "#110C28",
      title: "princefaizan800@gmail.com",
      link: "https://mail.google.com",
    },
    {
      color: "#110C28",
      title: "faizaanimran333@gmail.com",
      link: "https://mail.google.com",
    },
    
  ];
  const stylingMails = {
    ...styling,
    textAlign: "",
    fontSize: { xs: "17px", md: "22px" },
    pb: "0px",
    // m: "8px",
    m: { xs: "12px", md: "8px" },
    letterSpacing: "1px",
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <div className="glass-background" id='Contact' >
      <GlassPaper data-aos='fade-right'>
        <Grid container sx={{ mb: "0px" ,mt:'15px'}}>
          <Grid item xs={12} md={2} data-aos='fade-top'>
            <Typography variant="h5" sx={styling}>
              {"<"}Experience{"/>"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} data-aos='fade-left'>
            <Typography sx={stylingPara}>
              Duration: 23 August 2022 - Present I have been contributing as a
              Front End Developer at Finosys for the past few years, actively shaping
              user interfaces and enhancing the overall user experience. During
              this period, I have completed:
            </Typography>
            {exp.map((el, i) => (
              <>
                <Typography key={i} sx={stylingPara}>
                  <span
                    style={{
                      color: "#1b133f",
                      fontWeight: "bold",
                      paddingRight: "10px",
                    }}
                  >
                    {"<>"}
                  </span>{" "}
                  {el}
                </Typography>
              </>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{mt:'15px'}} data-aos='fade-down'>
    <Chip label="Contact"  sx={{...fontFam,fontSize:'22px',p:'8px 5px 10px 5px',bgcolor:'#1b133f',color:'white','&:hover':{bgcolor:'#1f193f'}}} />
  </Divider>
        <Grid container sx={{mt:'20px',mr:'45px'}}>
        <Grid item xs={12} md={12}>
          {/* <GlassPaper elevation={3}> */}
            <Grid container>
              {/* <Grid item xs={12} md={2}>
                <Typography variant="h5" sx={styling}>
                  {"<"}Contact{"/>"}
                </Typography>
              </Grid> */}

              <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={12} md={12}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    // ml: { xs: "0px", md: "50px" },
                    mr:'20px',
                    alignItems: "center",
                  }}
                >
                  {mails.map((el, i) => (
                    <>
                      <Grid key={i} item xs={12} md={4}>
                        <Link
                        data-aos='fade-right'
                          sx={{ display: "flex", textDecoration: "none",justifyContent:{xs:'',md:'center'},alignItems:{xs:'',md:'center'} }}
                          href={el.link}
                          target="_blank"
                        >
                          <Avatar
                            sx={{
                              ...fontFam,
                              bgcolor: el.color,
                              m: "8px",
                              "&:hover": { bgcolor: "#1b133f" },
                            }}
                          >
                            {el.title.split("")[0] === "0" ? (
                              <SmartphoneIcon />
                            ) : el.title.split("")[0] === "G" ? (
                              <GitHubIcon />
                    
                            ) : el.title.split("")[0] === "L" ? (
                              <LinkedInIcon />
                            ) : (
                              el.title.split("")[0].toUpperCase()
                            )}
                          </Avatar>
                          <Typography
                            sx={{
                              ...stylingMails,
                              "&:hover": {
                                color: "#1b133f",
                                fontSize: { sm: "14px", md: "22px" },
                                transition: {
                                  backgroundColor: "0.2s ease-in-out",
                                },
                              },
                            }}
                          >
                            {el.title}
                          </Typography>
                        </Link>
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          {/* </GlassPaper> */}
        </Grid>
      </Grid>
      </GlassPaper>

      
    </div>
  );
}

export default Contact;
