import React, { useEffect, useState } from "react";
import "./skills.css";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";
import ClearIcon from '@mui/icons-material/Clear';
import { FAColor } from "../../theme";
function Skills({ skill }) {

 const [isActive,setIsActive] = useState(false)
 
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
  }, []);
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
  const filtArr = [
    { label: "HTML 5" },
    { label: "CSS 3" },
    { label: "Javascript" },
    { label: "React Js" },
    { label: "Next Js" },
    { label: "Material UI" },
    { label: "Node Js" },
  ]
  const obj = [
    { title: "HTML 5", per: 85 },
    { title: "CSS 3", per: 80 },
    { title: "Javascript", per: 85 },
    { title: "React Js", per: 85 },
    { title: "Next Js", per: 70 },
    { title: "Material UI", per: 80 },
    { title: "Node Js", per: 40 },
  ]
  const [lang, setLang] = useState(obj);

  const filterHandle = (title)=>{
    setIsActive(!isActive)
    const filetered = lang.filter(el => el.title === title)
    
    setLang(filetered)
    if(isActive){
      setLang(obj)
    }
  }
 
  // let lang = [
  // { title: "HTML 5", per: 85 },
  // { title: "CSS 3", per: 80 },
  // { title: "Javascript", per: 85 },
  // { title: "React Js", per: 85 },
  // { title: "Next Js", per: 70 },
  // { title: "Node Js", per: 40 },

  // ];

  // useEffect(() => {
  //   setLang((prevLang) => {
  //     const updatedLang = [...prevLang];

  //     updatedLang[0].per = 85;
  //     updatedLang[1].per = 80;
  //     updatedLang[2].per = 85;
  //     updatedLang[3].per = 85;
  //     updatedLang[4].per = 70;
  //     updatedLang[5].per = 85;
  //     updatedLang[6].per = 40;

  //     return updatedLang;
  //   });
  // }, [skill]);

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
            <span style={{ color: FAColor, fontSize: "18px" }}>
              {" "}
              HTML, CSS, JavaScript, React, Next.js
            </span>{" "}
            and Material-UI libraries. With a keen eye for design and a passion
            for seamless user experiences, I bring creativity and technical
            expertise to every project, ensuring a polished and responsive
            interface that captivates users
          </Typography>
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={skillarr}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
          
          <Box sx={{display:'flex',justifyContent:{xs:'center',md:'space-around'},alignItems:'right',mt:'10px',flexWrap:'wrap'}}>
             {lang.map((el,i)=>(
             <Button
             sx={{
               color: '#FFFFFF',
               fontSize: { sm: '10px', md: '15px' },
               m: { xs: '5px', md: '0px' },
               border:`2px solid ${FAColor}`,
               mb: { xs: '13px', md: '10px' },
               '&:hover': { border: '2px solid #FFFFFF',color:FAColor },
              
             }}
             key={i}
             onClick={()=>filterHandle(el.title)}
           >
             {el.title}

             <Typography sx={{display:!isActive ? 'none':'block',fontSize:'22px',mt:'5px',ml:'5px',color:'white','& hover':{color:'white'}}} onClick={()=>{}}><ClearIcon fontSize="22px"/></Typography>
           </Button>
             ))}
           
            </Box>
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          container
          spacing={0}
        >
          {lang?.map((el, i) => (
            <Grid
              key={i}
              item
              xs={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                // p: "0px 25px 0px 25px",
                mb: "40px",
              }}
            >
              <Box
                data-aos="fade-down"
                sx={{
                  width: 150,
                  height: 150,
                  mt: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgressbar
                  value={el.per}
                  text={`${el.per}%`}
                  background
                  backgroundPadding={8}
                  styles={buildStyles({
                    backgroundColor: "black",
                    textColor: "#fff",
                    pathColor: FAColor,
                    trailColor: "white",
                    textSize: "10px", // Adjust the text size as needed
                    pathTransitionDuration: 1, // Control the animation duration
                    textAlign: "center",
                    //  pathTransition: 0.1,

                    // pathTransitionDuration:1
                  })}
                />
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
