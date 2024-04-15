import { Box, Typography } from "@mui/material";
import React from "react";
import "./projects.css";
function NP() {
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
        mt:'27px'
    };
    return (
        <>
            <div className="projects-section" id="Projects">
                <Box>
                    <Typography variant="h5" sx={styling}>
                        {"<"}Projects{"/>"}
                    </Typography>
                </Box>
            </div>
        </>
    )
}
export default NP;