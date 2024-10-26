import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import worshipHands from "../../assets/worshipHands.jpg";

import { FaMapMarkerAlt } from "react-icons/fa";
import {
  prayerService,
  baptismService,
  sundayServiceSection,
  findYourVision,
} from "../../data.ts";
// import LiveService from "../../apis/youtube/LiveService.tsx";
import { SocialIcon } from "react-social-icons";

import SectionLine from "../../components/pageSections/SectionLine.tsx";
import ImgTextSection from "../../components/pageSections/ImageTextSection.tsx";
import MyMap from "../../apis/GoogleMap.tsx";
import BaptismServiceSectionCard from "../../components/cards/customizedCards/BaptismServiceSectionCard.tsx";
import WantServeSectionCard from "../../components/cards/customizedCards/WantServeSectionCard.tsx";


export default function ServicesMainPage() {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        flexGrow: 1,
      }}
    >
      {/* --------------SundayService First Section----------- */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${worshipHands})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "flex-end", sm: "center", xs: "center" },
          width: "100%", // Full width of the container
          height: "100vh", // Full viewport height
          backgroundAttachment: "fixed",
        }}
      >
        <Grid size={{ xs: 6, md: 10 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            Sunday services
          </Typography>
          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Sunday 11:00-13:00
          </Typography>
          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Albanoliden 5, vån 3, 50630 Borås{" "}
            <FaMapMarkerAlt
              onClick={handleOpenMap}
              style={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
            />
          </Typography>

          {/* Open Google Map component */}
          <Dialog
            open={openMap}
            onClose={handleCloseMap}
            maxWidth="md"
            fullWidth
            style={{ color: "white", textDecoration: "none" }}
          >
            <DialogContent>
              <MyMap />
            </DialogContent>
          </Dialog>

          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Live: Sunday 11:00 on Youtube
          </Typography>
          {/* <LiveService /> */}
          <Typography variant="h6" sx={{ color: "white", marginTop: "20px" }}>
            <a
              href="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              style={{ color: "white" }}
            >
              {" "}
              Check All Services{" "}
            </a>
            <SocialIcon
              url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              network="youtube"
              style={{ height: 25, width: 25 }}
            />
          </Typography>
        </Grid>
      </Grid>
      {/* --------------SundayService ----------- */}
      <div id="sundayService"></div>
      <SectionLine text="Sunday Scervice" />
      <ImgTextSection
      inforSectionId=""
        id={sundayServiceSection.id}
        title={sundayServiceSection.title}
        subtitle={sundayServiceSection.subTitle}
        description={sundayServiceSection.description}
        images={sundayServiceSection.images}
      />

      {/* --------------PrayerService ----------- */}
      <SectionLine text="Prayer Services" />
      <div id="prayerService"></div>
      <ImgTextSection
      inforSectionId=""
        id={prayerService.id}
        title={prayerService.title}
        linkSubtitle={prayerService.linkSubtitle}
        description={prayerService.description}
        images={prayerService.images}
        imageLeft={false}
      />

      {/* -------------BaptismService----------- */}
      <SectionLine text="Baptism Scervices" />
      <div id="baptismService"></div>
      <BaptismServiceSectionCard
        id={baptismService.id}
        title={baptismService.title}
        description={""}
        steps={baptismService.steps}
        images={baptismService.image}
      />
      {/* -------------FindYourVision----------- */}
      <div id="serve"></div>
      <SectionLine text="Want To Serve The Lord" />
      <WantServeSectionCard
        id={findYourVision.id}
        title={findYourVision.title}
        steps={findYourVision.steps}
        description={findYourVision.description}
        images={findYourVision.images}
      />
      {/*******YoutubeVideoLink***********/}
      <SectionLine text="Service Videos" />

      {/* <YouTubePlaylists/>     */}
      <Box sx={{ marginBottom: "40px", marginTop: "20px" }}>
        <Typography
          variant="h5"
          sx={{
            color: "black",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          <a href="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter">
            {" "}
            Check Our Preachings on Youtube{" "}
          </a>{" "}
          <SocialIcon
            url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
            network="youtube"
            style={{ height: 30, width: 30 }}
          />
        </Typography>
      </Box>
    </Box>
  );
}
