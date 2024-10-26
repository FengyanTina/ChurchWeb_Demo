import { Box, styled, Typography } from "@mui/material";
import "./customizedCards.css";
import Grid from "@mui/material/Grid2";
import { BaptismSectionModel } from "../../../models/BaptismSecionModel";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  ...theme.applyStyles("dark", {}),
}));

const WantServeSectionCard = ({
  title,
  subtitle,
  images,
  steps,
}: BaptismSectionModel) => {
  const imageCount = Array.isArray(images) ? images.length : 1; // Determine the number of images
  const hasLargeImage = imageCount > 2;
  return (
    <Box sx={{ flexGrow: 1, width: "80%" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 12, md: 12 }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Item>
            {Array.isArray(images) ? (
              <div className="image-gallery-custom">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery Image ${index}`}
                    className={
                      hasLargeImage && index === 0 ? "image-large" : ""
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
            ) : (
            
              <img
                src={images}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: "380px",
                }}
                alt=""
              />
            )}
          </Item>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mx: "auto",
              px: 3,
              marginBottom: "10px",
              fontSize: {
                lg: "40px",
                md: "30px",
                sm: "30px",
                xs: "28px", 
              },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 3,
                fontSize: {
                  lg: "30px",
                  md: "22px",
                  sm: "22px",
                  xs: "20px", 
                },
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Box
            sx={{
              maxHeight: {
                xs: "450px",
                sm: "500px",
                md: "550px",
                lg: "600px",
              },
              overflowY: "auto",
              marginTop: "10px",
            }}
          >
            <ol>
              {steps &&
                steps.map((step, index) => (
                  <li key={index}>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        fontSize: {
                          lg: "25px",
                          md: "20px",
                          sm: "20px",
                          xs: "18px", 
                        },
                        lineHeight: 1.5,
                      }}
                    >
                      {step.link && step.linkName ? (
                        <>
                          {step.description} &nbsp; {/* Non-breaking space */}
                          <a href={step.link}>{step.linkName}</a>{" "}
                          {/* Render the link */}
                        </>
                      ) : (
                        step.description
                      )}
                    </Typography>
                  </li>
                ))}
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WantServeSectionCard;
