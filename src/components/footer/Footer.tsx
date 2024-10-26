import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        color: "black",
        padding: "20px",
        textAlign: "center",
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Borås Kristna Center. All rights
        reserved.
      </Typography>
      <Box>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
       
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>

        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact Us
        </Link>
        </Typography>
      </Box>
      <Box>
        <SocialIcon network="pinterest" style={{ height: 25, width: 25 }} />
        <SocialIcon
          url="https://instagram.com"
          network="instagram"
          style={{ height: 25, width: 25 }}
        />

        <SocialIcon
          url="https://facebook.com"
          network="facebook"
          style={{ height: 25, width: 25 }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
