import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import Senior from "../../assets/senior2.jpg";
import Woman from "../../assets/woman.jpg";
import Home from "../../assets/homeGroup.jpg";
import {
  BKCkYouth,
  BKCkIDS2,
  events,
  SundaySchoolImageGallary,
} from "../../data.ts";
import SudaySchoolImageGallary from "../../components/imageManagements/ImageGallaryWithColsRows.tsx";
import SectionLine from "../../components/pageSections/SectionLine.tsx";
import videoFile from "../../assets/istockphoto-987329642-640_adpp_is.mp4";
import SlickSlider from "../../components/slides/SlickSlider.tsx";
import PageTextPart from "../../components/cards/PageText.tsx";
import TeamIntroCard from "../../components/cards/TeamIntroCard.tsx";


export default function ActivitiesMainPage() {
    return (
      <Box style={{ marginTop: "80px", backgroundColor: "#f0f4f8" }}>
        <div id="groups"></div>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f0f4f8",
            marginTop: "20px",
          }}
        >
          <Box style={{ paddingTop: "20px" }}>
            <SlickSlider events={events} />
          </Box>
        </Box>
        {/* --------------ACTIVITIES-BKC Kids----------- */}
        <div id="sundaySchool"></div>
        <SectionLine text="BKC KIDS" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f0f4f8", 
            
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ flexDirection: { xs: "column", sm: "row",  marginBottom: "50px",  } }}
          >
            <Grid
              container
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <PageTextPart
                id={BKCkIDS2.id}
                title={BKCkIDS2.title}
                subtitle={BKCkIDS2.subtitle}
                description={BKCkIDS2.description}
                startTime={BKCkIDS2.startTime}
                location={BKCkIDS2.location}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                  height: {
                      xs: "200px", // Height for extra small screens
                      sm: "300px", // Height for small screens
                      md: "500px", // Height for medium and larger screens
                    },
              }}
            >
              <SudaySchoolImageGallary imageData={SundaySchoolImageGallary} />
            </Grid>
          </Grid>
        </Box>
        {/* --------------ACTIVITIES-BKC Youth----------- */}
        <div id="youth"></div>
        <SectionLine text="BKC YOUTH" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#f0f4f8",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{
              flexDirection: "column",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <Box
              sx={{
                width: "100%", // Ensure the container takes full width
                maxWidth: "640px", // Maximum width for large screens
                position: "relative",
                paddingTop: {
                  xs: "56.25%", // 16:9 aspect ratio for smaller screens
                  md: "30%", // Less padding for medium screens
                  lg: "20%", // Even less padding for large screens
                },
              }}
            >
              <video
                src={videoFile} // Use the imported video file
                controls
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></video>
            </Box>
          </Grid>
          <Grid size={12}>
            <PageTextPart
              id={BKCkYouth.id}
              title={BKCkYouth.title}
              subtitle={BKCkYouth.subtitle}
              description={BKCkYouth.description}
              startTime={BKCkYouth.startTime}
              location={BKCkYouth.location}
            />
          </Grid>
        </Box>
        {/* --------------ACTIVITIES-ACTIVITIES-BKC Other Groups----------- */}
        <div id="otherGroups"></div>
        <SectionLine text="Other Groups" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flexDirection: {
              md: "row",
              sm: "column",
              xs: "column",
            },
            gap: "50px",
          }}
        >
          <TeamIntroCard
            title={"Home Group"}
            subTitle={"Your Small Community"}
            description={"You can find your own small comminity..."}
            image={Home}
          />
          <TeamIntroCard
            title={"Senior Group"}
            subTitle={"Your Small Community"}
            description={"You can find your own small comminity..."}
            image={Senior}
          />
          <TeamIntroCard
            title={"Woman Group"}
            subTitle={"Your Small Community"}
            description={"You can find your own small comminity..."}
            image={Woman}
          />
        </Box>
        {/* --------------ACTIVITIES-ACTIVITIES-Other Activities----------- */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: "#f0f4f8",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, sm: 12 }}></Grid>
            <Grid size={{ xs: 12, sm: 12 }}></Grid>
          </Grid>
        </Box>
  
        <Box />
        <Box />
      </Box>
    );
  }
  