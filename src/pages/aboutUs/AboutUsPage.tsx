import { useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Pastor } from "../../data";
import Leader from "../../assets/leader.jpg";
import DavidB from "../../assets/DavidB.jpg";
import TeamIntroCard from "../../components/cards/TeamIntroCard";
import ReadMoreDialogs from "../../components/forms/ReadMoreDialog";
import UserTable from "../../components/tables/UserTable";
import SectionLine from "../../components/pageSections/SectionLine";

const AboutUsPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Jump directly to the target element's offset position
        const yOffset = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: yOffset, behavior: "auto" }); // Use 'auto' for no smooth scrolling
      }
    }
  }, []);

  return (
    <Box sx={{ marginTop: "150px", backgroundColor: "#f0f4f8" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%", // Full width of the container
          height: "100%",
          flexDirection: {
            md: "row",
            sm: "column",
          },
          marginBottom: "20px",
          margin: "0 auto", // Center it horizontally
          flexGrow: "1",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center", // Center the image horizontally
            alignItems: "center", // Center the image vertically
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto", 
              maxWidth: "600px", 
              objectFit: "cover", 
            }}
            src={Pastor.image}
            alt=""
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "space-between", 
            px: { xs: 5, sm: 10, md: 10 },
            fontSize: {
              lg: "40px",
              md: "30px",
              sm: "30px",
              xs: "28px",
            },
          }}
          size={{ xs: 12, md: 6 }}
          id="mainPastor"
        >
          <Typography
            sx={{
              marginTop: { xs: "20px", sm: "30px" },
              width: "100%",
              fontSize: {
                lg: "40px",
                md: "36px",
                sm: "32px",
                xs: "28px",
              },
            }}
            variant="h2"
          >
            {Pastor.title}
          </Typography>
          <Typography
            sx={{
              marginTop: "10px",
              width: "100%",
              fontSize: {
                lg: "30px",
                md: "25px",
                sm: "24px",
                xs: "20px",
              },
            }}
            variant="h4"
          >
            {Pastor.subTitle}
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              flexGrow: 1, 
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 11,
              position: "relative",
            }}
          >
            {/* Directly using Box to prevent wrapping issues with Typography */}
            {Pastor.content.split("\n").map((paragraph, index) => (
              <Box key={index} sx={{ display: "block", mb: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "22px",
                      md: "24px",
                      sm: "20px",
                      xs: "20px",
                    },
                  }}
                  variant="body1"
                >
                  {paragraph}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1">
              <Link
                href="https://your-blog-link.com"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Visit Blog
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Follow on Facebook
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1">
              <Link
                onClick={handleOpen}
                sx={{ cursor: "pointer", marginTop: 1 }}
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Read More
              </Link>
            </Typography>
          </Box>
        </Grid>
        <ReadMoreDialogs
          open={modalOpen}
          onClose={handleClose}
          title={Pastor.title}
          subtitle={Pastor.subTitle}
          content={Pastor.content}
        />
      </Grid>
      <SectionLine text="Leadership" />
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
        id="leaderShip"
      >
        <TeamIntroCard
          title={Pastor.title}
          subTitle={Pastor.subTitle}
          description={Pastor.content}
          image={DavidB}
        />
        <TeamIntroCard
          title={Pastor.title}
          subTitle={Pastor.subTitle}
          description={Pastor.content}
          image={Leader}
        />
        <TeamIntroCard
          title={Pastor.title}
          subTitle={Pastor.subTitle}
          description={Pastor.content}
          image={DavidB}
        />
      </Box>
      <SectionLine text="MemberShip" />
      <div id="userTable"></div>
      <UserTable />
      <SectionLine text="Our History" />
      <Box
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        id="userTable"
      ></Box>
    </Box>
  );
};

export default AboutUsPage;
