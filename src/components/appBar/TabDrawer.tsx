import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Typography } from "@mui/material";
import HuvudloggaBKC3 from "../../assets/Huvudlogga-BKC3.png";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface TabDrawerProps {
  open: boolean;
  onClose: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
}
const navRoutes = [
  { label: "Home", path: "/home" },
  { label: "About Us", path: "/aboutUs" },
  { label: "Schedules", path: "/schedules" },
  { label: "Services", path: "/services" },
  { label: "Activities", path: "/activities" },
  { label: "Contact", path: "/contact" },
];
const navItems = ["Home", "About Us", "Schedule", "Services", "Activities"];
export default function TabDrawer({
  open,
  onClose,
  handleLogin,
  handleLogout,
}: TabDrawerProps) {
  type NavItem = (typeof navItems)[number];
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // Map icons to each nav item with proper typing
  const icons: Record<NavItem, JSX.Element> = {
    Home: <HomeIcon />,
    "About Us": <InfoIcon />,
    Schedules: <EventAvailableIcon />,
    Services: <GroupsIcon />,
    Activities: <LocalActivityIcon />,
    Contact: <MailIcon />,
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "block" },
            color: "black",
          }}
        >
          <img
            src={HuvudloggaBKC3}
            alt="Logo"
            style={{ maxHeight: 50, marginRight: 10 }}
          />
        </Typography>
      </Box>
      <Divider />
      <List>
        {navRoutes.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              {" "}
              {/* Handle navigation on click */}
              <ListItemIcon>
                {/* Safely render the correct icon */}
                {icons[item.label]}{" "}
                {/* icons[item.label] based on the icons you defined */}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      {currentUser ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "10px",
            fontWeight: 500,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#9c27b0",
              fontWeight: 500,
              fontSize: "1.5rem",
            }}
          >
            {currentUser.firstName} {/* Safe access to user.name */}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#9c27b0", fontWeight: 800, marginLeft: "5px" }}
          >
            /
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              color: "#9c27b0",
              fontWeight: 800,
              fontSize: "1.2rem",
            }}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogin}>
              <ListItemIcon>
                <LoginIcon /> Login
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
