import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DetailsIcon from "@mui/icons-material/Details";

interface ImageGalleryProps {
  img: string;
  title?: string;
  featured?: boolean;
  author?: string;
}
interface ImageGalleryComponentProps {
  itemData: ImageGalleryProps[]; // Array of imageGalleryProps
  showAllAsFeatured?: boolean;
}
function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallary({
  itemData,
  showAllAsFeatured = false,
}: ImageGalleryComponentProps) {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: 350,
        overflowY: "auto",
        transform: "translateZ(0)",
      }}
      rowHeight={250}
      gap={1}
    >
      {itemData.map((item) => {
        const isFeatured = showAllAsFeatured ? true : item.featured;
        const cols = isFeatured ? 2 : 1; // If the image is featured, take up more columns
        const rows = isFeatured ? 2 : 1; // If the image is featured, take up more rows

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            {" "}
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`details ${item.title}`}
                >
                  <DetailsIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}  
    </ImageList>
  );
}
