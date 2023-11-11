import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import emo from "../Photo/emogy.png";
import CardActions from "@mui/material/CardActions";
import { Stack } from "@mui/material";

export default function BasicCard() {
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
        <Card className="rating_div" sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
              It was an informative,interactive and insightful session. Got all
              my doubts cleared and also got the path forward to be followed.
              Thank You once again!
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- Neeraj Kumar
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            Quick and detailed response.            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- Prem Kothawle
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            I had a highly engaging experience and felt quite positive. Everything was explained to me clearly.
            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- Vikneshwaran CR
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            Its was the bestest interaction i had in a while            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- Navin
            </Typography>
          </CardActions>
        </Card>

        <Card className="rating_div" sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", width: 405, '@media(max-width: 480px)': {width: 300} }}>
          <CardContent sx={{ margin: "20px" }}>
            <Typography variant="p">
            It was great taking him. One of the best person I took guidance from. Thank you so much for your mentorship. I will highly recommend it.            </Typography>
          </CardContent>
          <CardActions>
          <Typography sx={{ paddingLeft: '20px', color: 'gray'}} variant="h6">- Aman kumar
            </Typography>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
}
