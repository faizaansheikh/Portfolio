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
import { FAColor } from "../../theme";
import MailIcon from '@mui/icons-material/Mail';
import 'aos/dist/aos.css'
import Modal1 from "./Modal1";
function Contact() {
  const [open, setOpen] = React.useState(false);
  const GlassPaper = styled(Paper)`
    background-color: rgba(255, 255, 255, 0.22);
    padding: 20px;
    // margin: 80px;
    border-radius: 10px;
    // backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
    // width:400px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      // border: 1px solid red
    }
    @media (max-width: 600px) {
    
      margin: 30px;
    }
  
    @media (min-width: 601px) and (max-width: 960px) {
    
      margin: 30px;
    }
  
    @media (min-width: 961px) {
   
      margin: 30px 70px 30px 70px;
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
    fontSize: { sm: "30px", md: "30px" },
    textAlign: 'center',
    pb: "10px",
    pt: '40px'
  };
  const stylingPara = {
    ...styling,
    pt: '',
    fontSize: { sm: "12px", md: "22px" },
    textAlign: "justify",
    pb: "10px",
  };
  const exp = [

    "A software for supply chain optimisation called ABC XYZ analysis",
    "led the charge to improve the functionality and user interface of an all-inclusive management system",
    "Created aesthetically pleasing and intuitive dashboards that offer instantaneous insights and data visualisation",
    "Created a variety of forms with an emphasis on user-friendly interfaces and clear form fields in order to collect a variety of data inputs"
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
  const links1 = [<SmartphoneIcon sx={{ color: 'whitesmoke', fontSize: { xs: '35px', md: '55px' } }}/>,<GitHubIcon sx={{ color: 'whitesmoke', fontSize: { xs: '35px', md: '55px' } }}/> ,<LinkedInIcon sx={{ color: 'whitesmoke', fontSize: { xs: '35px', md: '55px' } }}/> ,<MailIcon sx={{ color: 'whitesmoke', fontSize: { xs: '35px', md: '55px' } }}/>  ]
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="glass-background"  >
      <Typography variant="h5" sx={styling}>
        {"<"}Experience{"/>"}
      </Typography>
      <Typography sx={{ ...styling, color: FAColor, pt: '', pb: '', fontSize: { xs: '20px', md: '30px' } }}>
        This is a brief synopsis of my most recent employment
      </Typography>
      {/* <GlassPaper data-aos='fade-right'> */}

      <Grid container sx={{ mb: "0px", mt: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <Grid item xs={12} md={8} data-aos='fade-left' sx={{ backdropFilter: 'blur(8px)', bgcolor: '#1e1d1d', mx: { xs: '20px', md: '' }, px: { xs: '20px', md: '' }, border: '1px solid white', borderRadius: '10px', p: '20px ' }}>
          <Typography sx={stylingPara}>
            Duration: 23 August 2022 - Present I have been contributing as a
            Front End Developer at Finosys for the past few years, actively shaping
            user interfaces and enhancing the overall user experience. During
            this period, I have finished:
          </Typography>
          {exp.map((el, i) => (
            <>
              <Typography key={i} sx={stylingPara}>
                <span
                  style={{
                    color: FAColor,
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
      <Typography variant="h5" sx={styling}>
        {"<"}Contact{"/>"}
      </Typography>
      <div style={{display:'flex',justifyContent: 'center', alignItems: 'center'}} id='Contact'>
      <Grid container sx={{ mb: "0px", mt: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',border: '1px solid white', borderRadius: '10px', p: '20px ',backdropFilter: 'blur(8px)', bgcolor: '#1e1d1d' ,width:'842.22px',mb:'40px'}}>
        {links1.map((el, i) => (
          <Grid key={i} item xs={12} md={2.5} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box onClick={i===0 || i===3 ? handleOpen : ''} sx={{ width: { xs: '100%', md: '100px' }, height: { xs: '65px', md: '100px' }, bgcolor: '#2d2c2c', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mb:{xs:'20px',md:'0px'},borderRadius: '5px', '&:hover': { border: '1px solid white', cursor: 'pointer' } }}>{el}</Box>
          </Grid>
        ))}
  </Grid>
      </div>
<Modal1 open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>

{/* data-aos='fade-left' */}
        {/* <GlassPaper elevation={3}> */}
        {/* <Grid container>
             
 sx={{display:'flex',mx:{xs:'20px',md:''},px:{xs:'20px',md:''},border:'1px solid white',borderRadius:'10px',p:'20px '}}

              <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={12}>
                <Grid
                  data-aos='fade-right'
                  container
                  sx={{
                    display: "flex",
                    // ml: { xs: "0px", md: "50px" },
                    mr: '20px',

                    alignItems: "center",

                  }}
                >
                  {mails.map((el, i) => (
                    <>
                      <Grid key={i} item xs={12} md={4} sx={{ display: "flex", textDecoration: "none", justifyContent: { xs: '', md: 'center' }, alignItems: { xs: '', md: 'center' } }}>
                        <Link

                          sx={{ display: "flex", textDecoration: "none", justifyContent: { xs: '', md: 'center' }, alignItems: { xs: '', md: 'center' } }}
                          href={el.link}
                          target="_blank"
                        >
                          <Avatar
                            sx={{
                              ...fontFam,
                              zIndex: 5,
                              bgcolor: '#16aa9e',
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
            </Grid> */}


    



    </div>
  );
}

export default Contact;
