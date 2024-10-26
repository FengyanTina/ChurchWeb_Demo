import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import ReadMoreDialogs from "../forms/ReadMoreDialog";
interface IntroCardProps {
  title: string;
  subTitle: string;
  description: string;
  image?: string;
}
export default function TeamIntroCard({
  title,
  subTitle,
  description,
  image,
}: IntroCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {image && (
          <CardMedia component="img" height="240" image={image} alt="" />
        )}

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {subTitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              position: "relative",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Read More
        </Button>
      </CardActions>
      <ReadMoreDialogs
        open={modalOpen}
        onClose={handleClose}
        title={title}
        subtitle={subTitle}
        content={description}
      />
    </Card>
  );
}
