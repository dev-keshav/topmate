import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Option = () => {
  const [active, setActive] = useState(null);

  const handleClick = (buttonName) => {
    setActive(buttonName);
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => handleClick("All")}
          style={{
            backgroundColor: active === "All" ? "black" : "#F7F7F7",
            color: active === "All" ? "white" : "black",
            textDecoration: "none",
            margin: 4,
            width: "80px",
            height: "50px",
            fontSize: "16px",
            borderRadius: "12px",
            borderStyle: "none",
            cursor: "pointer",
            marginRight: "25px",
            textTransform: "inherit",
          }}
          component={Link}
          to="/"
        >
          All
        </Button>

        <Button
          onClick={() => handleClick("one")}
          style={{
            backgroundColor: active === "one" ? "black" : "#F7F7F7",
            color: active === "one" ? "white" : "black",
            textDecoration: "none",
            margin: 4,
            width: "80px",
            height: "50px",
            fontSize: "16px",
            borderRadius: "12px",
            borderStyle: "none",
            cursor: "pointer",
            marginRight: "25px",
            textTransform: "inherit",
          }}
          component={Link}
          to="/onecall"
        >
          1:1 Call
        </Button>

        <Button
          onClick={() => handleClick("priority")}
          style={{
            backgroundColor: active === "priority" ? "black" : "#F7F7F7",
            color: active === "priority" ? "white" : "black",
            textDecoration: "none",
            margin: 4,
            width: "80px",
            height: "50px",
            fontSize: "16px",
            borderRadius: "12px",
            borderStyle: "none",
            cursor: "pointer",
            marginRight: "25px",
            textTransform: "inherit",
          }}
          component={Link}
          to="/prioritydm"
        >
          Priority
        </Button>
      </Stack>
    </div>
  );
};

export default Option;
