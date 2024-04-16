import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./projects.css";
import pic1 from './images/expense1.JPG'
import LinkIcon from '@mui/icons-material/Link';
import wether from "./images/wether1.JPG";
import hotel from "./images/hotel2.JPG";
import expense from "./images/expense1.JPG";
import car from "./images/ssc.png";
import wether12 from "./images/wether12.JPG";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FAColor } from "../../theme";
function NP() {
    const boxdata = [
        {
            id: 1, urls: "https://automobile-rental-app-psi.vercel.app/", image: car, title: "Car Rental App",
            links: 'https://github.com/faizaansheikh/library_app', arr: ['Material UI', 'Javascript', 'React','Node','MongoDB'],
            des:'Introducing our car renting system: effortlessly book the perfect car for any occasion. This platform offers a diverse selection of vehicles with detailed descriptions and photos. Simply choose, book, and go! our React-powered admin panel streamlines operations. Manage bookings, update listings, and monitor performance from one centralized hub'
        },
        {
            id: 2, urls: "https://weather-a55d2.web.app/", image: wether, title: "Weather App ",
            links: 'https://github.com/faizaansheikh/Weatherapp', arr: ['HTML', 'CSS', 'Javascript', 'React'],
            des:"Explore the world's weather with our innovative Weather App, meticulously crafted using React and integrated with a robust API. This user-friendly application provides real-time weather updates, forecasts, and intuitive visuals, all tailored for your convenience"
        },
        {
            id: 3, urls: "https://xresort-53b181.netlify.app", image: hotel, title: "Hotel Website UI",
            links: 'https://github.com/faizaansheikh/hotelweb', arr: ['HTML', 'CSS', 'React'],
            des:"A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey"
        },
        {
            id: 4, urls: "https://expenseappx.netlify.app/", image: expense, title: "Expense App ",
            links: 'https://github.com/faizaansheikh/Expense_app', arr: ['HTML', 'CSS', 'Javascript', 'React'],
            des:"Our project is an innovative expense management application developed using React and other cutting-edge technologies. This app is designed to streamline the process of tracking and managing expenses, offering users a user-friendly interface and powerful functionalities"
        },
        {
            id: 5, urls: "https://weathernew-three.vercel.app/", image: wether12, title: "Weather App 2",
            links: 'https://github.com/faizaansheikh/weathernew', arr: ['HTML', 'CSS', 'Javascript', 'React'],
            des:'Introducing our latest project: a cutting-edge weather application seamlessly integrated with React for dynamic responsiveness. Utilizing advanced API integration, our app delivers real-time weather updates with precision and reliability users can effortlessly access comprehensive weather information tailored to their location and preferences.'
        },
    ];
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
        // pb: "39px",
        pt: '27px'
    };
    const handleUrl = (links)=>{
        console.log(links);
        window.open(links,'_blank')
    }
    return (
        <>
            <div className="projects-section" id="Projects">
                <Box>
                    <Typography variant="h5" sx={styling}>
                        {"<"}Projects{"/>"}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" sx={{ ...styling, color: FAColor }}>
                        Things I've build so far
                    </Typography>
                </Box>
                <Box sx={{ p: '50px' }}>
                    <Grid container spacing={4}>
                        {boxdata.map((el, i) => (
                            <Grid key={i} item xs={12} md={4} sx={{ height: 'auto','&:hover':{cursor:'pointer'}, }} onClick={()=>handleUrl(el.urls)}>
                                <Box sx={{ border: '1px solid grey', borderRadius: '10px', '&:hover': { border: '1.3px solid white',boxShadow: '0 30px 60px 30px black' }, transition: '0.3s ease' }}>
                                    <img src={el.image} style={{ width: '100%', height: '250px', filter:'brightness(85%)',objectFit: 'cover', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} alt="" />
                                    <Box sx={{ p: '15px 15px 0px 15px', height: '235px',width:'100%' }}>
                                        <Typography sx={{ color: 'white' }} variant="h5">{el.title}</Typography>
                                        <Typography sx={{ color: 'lightgrey', fontSize: "12px" }}>{el.des}</Typography>
                                        <Box sx={{ display: 'flex', mt: '10px' ,width:'60px'}}>
                                          
                                           {el.arr?.map((e,ind)=>( <Box sx={{ borderRadius: '3px',color: 'white', px: '8px', py: '5px', fontSize: '11px', mr: '9px', bgcolor: '#383d38' ,textWrap:'nowrap'}}>{e} </Box>))}
                                          
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '10px', mb: '5px',alignItems:'center' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ color: 'grey' }}><LinkIcon /> </Typography>
                                                <Typography onClick={()=>handleUrl(el.urls)} sx={{ '&:hover': { cursor: 'pointer', color: 'lightgrey' }, color: 'white', fontSize: '12px', pt: '3px', pl: '3px' }}> Preview</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ color: 'white', fontSize: '10px' }}><GitHubIcon /> </Typography>
                                                <Typography onClick={()=>handleUrl(el.links)} sx={{ '&:hover': { cursor: 'pointer', color: 'lightgrey' }, color: 'white', fontSize: '12px', pt: '3px', pl: '3px' }}> View Code</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                               
                            </Grid>
                        ))}


                       
                    </Grid>
                </Box>

            </div>
        </>
    )
}
export default NP;
