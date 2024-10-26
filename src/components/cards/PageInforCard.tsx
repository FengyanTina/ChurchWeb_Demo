import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import { PageInforModel } from "../../models/PageInforModel";
import { HashLink } from "react-router-hash-link";

export default function PageInforCard({
  category,
  title,
  subtitle,
  description,
  buttonText,
  startTime,
  endTime,
  location,
  buttonLink,
}: PageInforModel) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: 350,
        border: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          paddingLeft: "0",
        }}
      >
        {category && (
          <Typography
            gutterBottom
            sx={{
              color: "text.secondary",
              fontSize: 18,
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {category}
          </Typography>
        )}
        {startTime && (
          <Typography variant="caption" sx={{ mt: 2, color: "text.secondary" }}>
            {formatDate(startTime)}: {formatTime(startTime)}
            {endTime && ` - ${formatTime(endTime)}`}{" "}
            {/* Only render endTime if it exists */}
          </Typography>
        )}
        {location && (
          <Typography variant="caption" sx={{ mt: 2, color: "text.secondary" }}>
            {location}
          </Typography>
        )}
        <Typography
          variant="h5"
          component="div"
          sx={{
            mb: 1,
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            mb: 1.5,
            fontSize: 18,
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: "100%",
            WebkitLineClamp: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            fontSize: 18,
          }}
        >
          {description}
        </Typography>
      </CardContent>
      {buttonLink && (
        <CardActions>
          <HashLink to={buttonLink}>{buttonText}</HashLink>
        </CardActions>
      )}
    </Card>
  );
}
