import React, { useEffect, useRef, useState } from "react";
import "./intro.css";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Intro({ content }: { content: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
  
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const checkOverflow = () => {
        if (textRef.current && containerRef.current) {
          // Calculate the height of 9 lines
          const lineHeight = parseFloat(window.getComputedStyle(textRef.current).lineHeight);
          const maxHeight = lineHeight * 7;
  
          // Check if the text is overflowing
          setIsTruncated(textRef.current.scrollHeight > maxHeight);
        }
      };
  
      checkOverflow();
      window.addEventListener("resize", checkOverflow); // Re-check on window resize
      return () => window.removeEventListener("resize", checkOverflow);
    }, [content, isExpanded]);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
    
    const paragraphs = [
        "en plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud. en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge. en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.",
        "Additional paragraph to demonstrate more content handling...en plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud. en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge. en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.",
        "More content to ensure that overflow is demonstrated properly.en plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud. en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge. en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.",
        // Add as many paragraphs as needed
      ];
      
    return (
  <Box className="intro-container" ref={containerRef}>
    <Grid>
        <Box  sx={{paddingBottom:'40px',overflow:'hidden'}}>
          <Typography  variant="h3" >
        Vår vision
      </Typography>   
        </Box>
     <Box>
      <Typography 
      ref={textRef}
      className="intro-p"
       sx={{
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer",
          maxHeight: isExpanded ? "none" : "calc(1.5em * 7)", // 9 lines when not expanded
          "-webkit-line-clamp": isExpanded ? "none" : 7,
          lineHeight: 1.5,
        
          overflowY: isExpanded ? "auto" : "hidden",
        }}>
     {paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br /> 
              </React.Fragment>
            ))}  
        
      </Typography>
      {!isExpanded && isTruncated && (
        <Box
          sx={{
            display: "inline",
            color: "blue",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "8px",
          }}
          onClick={toggleExpand} // Clicking the ... will expand
        >
          ... Show more
        </Box>
      )}
      {isExpanded && (
        <Box
          sx={{
            display: "inline",
            color: "blue",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "8px",
          }}
          onClick={toggleExpand} // Clicking the ... will collapse
        >
          Show less
        </Box>
      )}
      </Box>
    </Grid>
  </Box>
);}


