import { Box, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./imageText.css";
import { ImageInforSectionModel } from "../../models/ImageInforSection";
import ImageGallary from "../imageManagements/ImageGallary";
import { PageInforModel } from "../../models/PageInforModel";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  ...theme.applyStyles("dark", {}),
}));
const ImgTextSection = ({
  inforSectionId,
  title,
  subtitle,
  description,
  images,
  linkSubtitle,
  imageLeft = true,
}: ImageInforSectionModel) => {
  const renderImage = () => {
    if (Array.isArray(images)) {
      return <ImageGallary itemData={images.map((img) => ({ img: img }))} />;
    }

    return (
      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img src={images} className="image-responsive" alt="" />
      </div>
    );
  };
  return (
    <Box sx={{ flexGrow: 1, width: "80%" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 12, md: 12 }}
      >
        {imageLeft ? (
          <>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Item>{renderImage()}</Item>
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
              {renderTextPart({
                id: inforSectionId,
                title,
                subtitle,
                description,
                linkSubtitle,
              })}
            </Grid>
          </>
        ) : (
          <>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              {renderTextPart({
                id: inforSectionId,
                title,
                subtitle,
                description,
                linkSubtitle,
              })}
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Item>{renderImage()}</Item>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
const renderTextPart = ({
  title,
  subtitle,
  description,
  linkSubtitle,
}: PageInforModel) => (
  <>
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        mx: "auto",
        px: 3,

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
    {linkSubtitle && (
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mx: "auto",
          px: 3,
          mt: 2,
          marginBottom: "10px",
          fontSize: {
            lg: "30px",
            md: "22px",
            sm: "22px",
            xs: "20px",
          },
        }}
      >
        <a
          href=""
          style={{
            fontSize: "inherit",
          }}
        >
          {linkSubtitle}
        </a>
      </Typography>
    )}
    {subtitle && (
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mx: "auto",
          px: 3,
          mt: 3,
          marginBottom: "10px",
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
        display: "flex",
        mt: 3,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        marginbottom: "10px",
        minHeight: "200px",
        maxHeight: "300px",
        overflowY: "auto",
        "@media (max-width: 900px)": {
          minHeight: "200px",
          maxHeight: "300px",
        },
      }}
    >
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
          px: 3,
          overflowY: "auto",
        }}
      >
        {description}
      </Typography>
    </Box>
  </>
);

export default ImgTextSection;
