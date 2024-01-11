import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Rating } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";





export default function CourseBox({ title, name, rating, imgUrl }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = React.useState(false)

  const styleBox = {
    transform: `rotate(${isHovered ? -5 : 0}deg)`,
    transition: "transform 0.3s ease", 
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Box
        style={styleBox}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <Typography>
              <Rating name="read-only" value={rating} readOnly />
            </Typography>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#F7F7F7",
            paddingLeft: 4,
            paddingBottom: 2,
            float: "right",
            cursor: "pointer",
          }}
        >
          Click <NavigateNextIcon fontSize="large" />
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imgUrl}
        alt="Live from space album cover"
      />
    </Card>
  );
}
