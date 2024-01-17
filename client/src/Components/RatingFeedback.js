import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import emo from "../Photo/emogy.png";
import CardActions from "@mui/material/CardActions";
import { Stack } from "@mui/material";

export default function RatingFeedback() {
  const [feedbackData, setfeedbackData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://pipc.onrender.com/v1/api/feedbackData")
    .then((response) => response.json())
    .then((data) => setfeedbackData(data))
    .catch((error) => console.error("Error fetching data:", error))
  }, [])
  return (
    <div className="ratingFeedback_div">
      <h1>Ratings and feedbacks</h1>
      <div className="rating_div">
        <Card className="rating_div" sx={{ borderRadius: "20px", width: 205 }}>
          <CardContent>
            <Avatar
              alt="Remy Sharp"
              src={emo}
              sx={{ marginX: "30px", width: "100px", height: "100px" }}
            />
          </CardContent>
        </Card>

        <Card className="rating_div" sx={{ borderRadius: "20px", width: 205 }}>
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="h3"
              component="div"
            >
              5/5
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="h6"
              component="div"
            >
              10 ratings
            </Typography>
          </CardContent>
        </Card>
        <Card className="rating_div" sx={{ borderRadius: "20px", width: 205 }}>
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="h3"
              component="div"
            >
              9
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="h6"
              component="div"
            >
              TESTIMONIALS
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Stack direction='row' useFlexGap flexWrap="wrap" className="text_feedbacks">
        <Card className="rating_div" sx={{ marginTop: '50px', backgroundColor: '#FDFBF9', display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            {feedbackData[0]?.feedback || "No feedback"}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- {feedbackData[0]?.name || "Hello"}
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ marginTop: '50px', backgroundColor: '#FDFBF9', display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            {feedbackData[1]?.feedback || "No feedback"}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- {feedbackData[1]?.name || "Hello"}
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ marginTop: '50px', backgroundColor: '#FDFBF9', display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            {feedbackData[2]?.feedback || "No feedback"}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- {feedbackData[2]?.name || "Hello"}
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ marginTop: '50px', backgroundColor: '#FDFBF9', display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            {feedbackData[3]?.feedback || "No feedback"}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- {feedbackData[3]?.name || "Hello"}
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ marginTop: '50px', backgroundColor: '#FDFBF9', display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            {feedbackData[4]?.feedback || "No feedback"}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- {feedbackData[4]?.name || "Hello"}
            </Typography>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
}
