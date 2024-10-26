import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SocialIcon } from "react-social-icons";
import { ActivitySocialMediaScetionCardModel } from "../../../models/ActivitySocialMediaSectionModel";
import ImageGallary from "../../imageManagements/ImageGallary";
import { imageGallarytemData } from "../../../data";
import PageInforCard from "../PageInforCard";

const ActivitySocialMediaScetionCard = ({
inforSectionId,
  title,
  category,
  subtitle,
  description,
  images,
  buttonLink
}: ActivitySocialMediaScetionCardModel) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f0f4f8",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            maxWidth: 500,
            height: 400,
            transform: "translateZ(0)",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {Array.isArray(images) ? (
            <ImageGallary itemData={imageGallarytemData} />
          ) : (
            <img
              src={images}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxHeight: "380px",
              }}
              alt=""
            />
          )}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <PageInforCard
          id={inforSectionId}
            category={category}
            title={title}
            subtitle={subtitle}
            description={description}
            buttonText="Learn More"
            buttonLink={buttonLink}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px", 
              paddingTop: "10px", 
              paddingLeft: "10px",
            }}
          >
            <SocialIcon
              url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              network="youtube"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="https://www.instagram.com/boraskristnacenter/"
              network="instagram"
              style={{ height: 25, width: 25 }}
            />

            <SocialIcon
              url="https://www.facebook.com/BorasKristnaCenter/?locale=sv_SE"
              network="facebook"
              style={{ height: 25, width: 25 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActivitySocialMediaScetionCard;
