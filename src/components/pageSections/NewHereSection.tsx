import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { ImageInforSectionModel } from "../../models/ImageInforSection";

export default function NewHereSectionGrid({
  title,
  description,
  images,
  subtitle,
}: ImageInforSectionModel) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${images})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        textAlign: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: "0px",
            paddingTop: "0px",
            fontWeight: "700",
            color: "#883b9b",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            marginTop: "10px",
            fontWeight: "500",
            color: "#9b4eaf",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: "600",
            color: "#9b4eaf",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: "0px",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            paddingTop: "40px",
            paddingBottom: "40px",
            marginBottom: "60px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HashLink
            to="/services#sundayService"
            style={{
              display: "block",
              fontSize: "25px",
              color: "black",
              fontWeight: "500",
            }}
          >
            SundayService
          </HashLink>
          <HashLink
            to="/services#serve"
            style={{
              display: "block",
              fontSize: "25px",
              color: "black",
              fontWeight: "500",
            }}
          >
            Connect To Your Purpose
          </HashLink>
          <HashLink
            to="/activities#groups"
            style={{
              display: "block",
              fontSize: "25px",
              color: "black",
              fontWeight: "500",
            }}
          >
            For Your Family
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
}
