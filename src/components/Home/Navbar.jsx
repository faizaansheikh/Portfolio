import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ReorderIcon from '@mui/icons-material/Reorder';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./navbar.css";
import { Events, Link, scrollSpy, scroller } from "react-scroll";

const drawerWidth = 240;
const navItems = ["Home", "Projects", "Certificates","Skills", "Contact"];

function Navbar(props) {
  const { window, setSkill } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleSkillsSectionActive = () => {
    // Your functionality or function call when skills section becomes active
    console.log("Skills section is now active!");
  };
  const handleClicked = () => {
    // setSkill(true);
    setMobileOpen(false)
  };
  const colors = ["#4400FF", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",color:'white' }}>
       <Typography
            variant="h6"
            component="div"
            sx={{
              ...fontFam,
              letterSpacing: "1px",
              flexGrow: 1,
              // display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              fontSize: "29px",
              mt:'20px'
            }}
          >
            {/* 25101F */}
            <span style={{ color: "", fontWeight: "bold" }}>{"<"}</span>
            Portfolio{" "}
            <span style={{ color: "mediumslateblue", fontWeight: "bold" }}>
              {"/>"}
            </span>
          </Typography>
      <Divider />
      <List>
        {navItems.map((item,i) => (
          <ListItem sx={{border:`2px solid ${colors[i]}`,mt:'13px',borderRadius:'10px',"&:hover":{border:`2px solid white`}}} key={i} disablePadding>
            <Box sx={{borderRadius:'100%',border:`2px solid ${colors[i]}`,width:'30px',height:'30px',ml:'10px'}}></Box>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} /> */}
              <IconButton
                // className="nav-linkss"
                key={item}
                sx={{
                  ...fontFam,
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "300",
                  // pl: "30px",
                  // pt:'20px',
                  
                  '& hover':{color:'grey'}
                }}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={800}
                  onClick={handleClicked}
                  // onSetActive={handleScrollToSkills}
                >
                  {item}
                  {"/>"}
                </Link>
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
 
  const handleScrollToSkills = () => {
    // Your custom functionality here
    console.log("Scrolled to Skills section");
  };

 

  return (
    <Box sx={{ display: "flex" }} >
    
      <CssBaseline />
      
      <AppBar
        sx={{
                 
          // width: '100%',      
          bgcolor: "transparent",
          mt: "10px",
          backdropFilter: " blur(2px)",
          background: "rgba(0,0,0,0.4)",
          zIndex: 1000,        
        }}
        component="nav"
      >
        <Toolbar>
       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ...fontFam,
              letterSpacing: "1px",
              // flexGrow: 1,
              display: { xs: "block", sm: "none" },
              fontWeight: "bold",
              fontSize: "29px",
            }}
          >
           
            <ReorderIcon size='15px'/>
         
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ...fontFam,
              letterSpacing: "1px",
              flexGrow: 0.7,
              display: { xs: "flex", sm: "none" },
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "29px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "", fontWeight: "bold" }}>{"<"}</span>
            Portfolio{" "}
            <span style={{ color: "mediumslateblue", fontWeight: "bold" }}>
              {"/>"}
            </span>
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              ...fontFam,
              letterSpacing: "1px",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              fontSize: "29px",
            }}
          >
            {/* 25101F */}
            <span style={{ color: "", fontWeight: "bold" }}>{"<"}</span>
            Portfolio{" "}
            <span style={{ color: "mediumslateblue", fontWeight: "bold" }}>
              {"/>"}
            </span>
          </Typography>

          
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
       
            {navItems.map((item,i) => (
              <IconButton
                className="nav-linkss"
                key={i}
                sx={{
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: "bold",
                  pl: "30px",
                }}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={800}
                  // onClick={handleClicked}
                  // onSetActive={handleScrollToSkills}
                >
                  {item}
                  {"/>"}
                </Link>
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              bgcolor:'black',
              boxSizing: "border-box",
              width: drawerWidth,
              transition: 'background-color 0.8s ease-in-out'
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      
      </Box> */}
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
