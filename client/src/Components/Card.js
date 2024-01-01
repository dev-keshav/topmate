import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import BasicDateTimePicker from "./Datetime";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export default function BasicCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openPopup, setOpenPopup] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClickPopup = (Transition) => () => {
    setTransition(() => Transition);
    setOpenPopup(true);
  };

  const handleClosePopup = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenPopup(false);
  };

  // Handling the date-time picker
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setUserData((prevData) => ({ ...prevData, time: date }));
  };


  // Firebase database
  const [userData, setUserData] = useState({
    name: props.name,
    username: "",
    email: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    setUserData((prevData) => ({ ...prevData, name: props.name }));
  }, [props.name]);

  let name, value;
  const userDetails = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // connect to realtime database
  const submitData = async (event) => {
    event.preventDefault();
    const { name, username, email, message, time } = userData;
    const res = await fetch(
      "https://topmate-536ad-default-rtdb.firebaseio.com/userdata-record.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          message,
          time,
        }),
      }
    );
    if (res) {
      handleClickPopup(TransitionRight)();
      handleClose();
    }
  };

  // check it is Priority DM or 1:1 Call
  let mess;
  if (props.title === "Priority DM") {
    mess = (
      <TextField
        sx={{ marginTop: 2 }}
        id={props.id}
        name="message"
        label="Message"
        variant="outlined"
        value={userData.message}
        onChange={userDetails}
      />
    );
  } else {
    mess = (
      <BasicDateTimePicker
        label="DateTime"
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          handleDateChange(date); // Call the parent's function to update the date
        }}
      />
    );
  }

  return (
    <>
      <Card
        onClick={handleOpen}
        className="card-to-click"
        sx={{
          width: 400,
          borderRadius: 4,
          cursor: "pointer",
          "@media (max-width: 480px)": { width: "90vw" },
        }}
      >
        <CardContent sx={{ paddingBottom: "40px" }}>
          <Typography
            sx={{ fontSize: 14, float: "left" }}
            color="text.secondary"
            gutterBottom
          >
            <Button
              sx={{
                borderRadius: 3,
                color: "black",
                backgroundColor: "#F7F7F7",
              }}
              size="medium"
            >
              <CalendarTodayIcon sx={{ marginRight: 1 }} />
              {props.title}
            </Button>
          </Typography>

          <CardActions sx={{ float: "right" }}>
            <ArrowCircleRightRoundedIcon fontSize="large" />
          </CardActions>
        </CardContent>
        <CardContent sx={{ height: 150 }}>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography>
            <Rating name="read-only" value={props.rating} readOnly />
          </Typography>
        </CardContent>
        <Divider />
        <CardActions sx={{ mt: 2, mb: 2, ml: 2, float: "left" }}>
          <Typography
            sx={{ color: "gray", fontWeight: "600" }}
            variant="p"
            component="div"
          >
            {props.time}
          </Typography>
        </CardActions>
        <CardActions sx={{ mr: 2, mt: 1, mb: 1, float: "right" }}>
          <Button
            sx={{
              borderRadius: 3,
              color: "black",
              backgroundColor: "#F7F7F7",
              p: 1,
            }}
            size="small"
          >
            <Typography
              style={{
                textDecorationLine: "line-through",
                marginRight: "10px",
              }}
            >
              {props.oldprice}
            </Typography>
            <Typography>{props.newprice}</Typography>
          </Button>
        </CardActions>
      </Card>

      {/* User Date input modal          */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 700,
            "@media (max-width: 480px)": { width: 270 },
          }}
        >
          <h2 id="parent-modal-title">{props.name}</h2>
          <p id="parent-modal-description">{props.modalPara}</p>
          <TextField
            id={props.id}
            name="username"
            label="Name"
            variant="outlined"
            value={userData.username}
            onChange={userDetails}
          />
          <TextField
            sx={{
              marginLeft: "40px",
              "@media(max-width: 480px)": {
                marginLeft: "0",
                marginTop: "10px",
              },
            }}
            id={props.id}
            name="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={userDetails}
          />
          {/* This will add message box or datatimer  */}
          {mess}
          <br />
          <Button
            onClick={(e) => {
              submitData(e);
            }}
            sx={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
              marginTop: 3,
              marginBottom: 2,
              width: "180px",
              height: "50px",
              fontSize: "16px",
              borderRadius: "5px",
              borderStyle: "none",
              cursor: "pointer",
              textTransform: "inherit",
              "&:hover": {
                backgroundColor: "#33334d",
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={openPopup}
        onClose={handleClosePopup}
        autoHideDuration={6000}
        TransitionComponent={transition}
        message="Successfully Booked!"
        key={transition ? transition.name : ""}
      />
    </>
  );
}
