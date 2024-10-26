
import ContactSection from "../../components/pageSections/contact-section/ContactSection";
import { Box } from "@mui/material";
import Intro from "../../components/pageSections/contact-section/Intro";
import MyMap from "../../apis/GoogleMap";

const text =
  "en plats för mötet mellan Gud och människa, en plats där tillber Gud en plats där du kan lära känna och utvecklas i den plan Gudhar för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtidenhar för dig så att du blir hans lärjunge en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden har för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtidenhar för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtidenhar för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtiden";
export default function ContactMainPage() {
  return (
    <>
      <div>
        <Intro content={text} />
        <ContactSection />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <MyMap />
        </Box>
      </div>
    </>
  );
}
