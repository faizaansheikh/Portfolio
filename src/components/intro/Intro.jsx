import React from 'react'
import { motion } from "framer-motion";
import { Box } from '@mui/material';
function Intro() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 2,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // mt: "10%",
        height:'100vh',
        bgcolor:'#110016'
      }}
    >
    <motion.svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    initial="hidden"
    animate="visible"
 
  >
  
    <motion.circle
      cx="100"
      cy="300"
      r="80"
      stroke="#0099ff"
      variants={draw}
      custom={2}
    />
    <motion.line
      x1="220"
      y1="230"
      x2="360"
      y2="370"
      stroke="#ff0055"
      custom={3}
      variants={draw}
    />
    <motion.line
      x1="220"
      y1="370"
      x2="360"
      y2="230"
      stroke="#ff0055"
      custom={3.5}
      variants={draw}
    />
    <motion.rect
      width="140"
      height="140"
      x="410"
      y="230"
      rx="20"
      stroke="#00cc88"
      custom={4}
      variants={draw}
    />
 
  </motion.svg>
  </Box>
  )
}

export default Intro