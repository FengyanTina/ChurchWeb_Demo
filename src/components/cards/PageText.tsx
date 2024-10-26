import { Box, CardContent, Typography } from "@mui/material";
import { PageInforModel } from "../../models/PageInforModel";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";

const PageTextPart = ({
  title,
  subtitle,
  description,
  linkSubtitle,
  startTime,
  endTime,
  location,
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
        alignItems: "center",
        justifyContent: "center",
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
    <CardContent>
      {startTime && (
        <Typography variant="h5" sx={{ mt: 2, color: "text.secondary" }}>
          <strong>Time: </strong> {formatDate(startTime)}:{" "}
          {formatTime(startTime)}
          {endTime && ` - ${formatTime(endTime)}`}{" "}
          {/* Only render endTime if it exists */}
        </Typography>
      )}
      {location && (
        <Typography variant="h5" sx={{ mt: 2, color: "text.secondary" }}>
          <strong>Location:</strong> {location}
        </Typography>
      )}
    </CardContent>
  </>
);
export default PageTextPart;
