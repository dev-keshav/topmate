import React, { useEffect, useState } from "react";
import CourseBox from "./CourseBox";
import { Stack, Typography } from "@mui/material";

function CourseList() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("http://localhost:3001/v1/api/contentBoxData")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        setCourseData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Typography
        style={{
          textAlign: "center",
          marginBottom: "60px",
          textDecoration: "underline",
          fontFamily: "cursive",
          color: "#2A2C7C",
        }}
        variant="h4"
        mt={2}
      >
        Contents
      </Typography>
      <Stack direction="row" spacing={10} useFlexGap flexWrap="wrap">
        {courseData.length > 0 ? (
          courseData.map((card) => (
            <Stack key={card.id}>
              <CourseBox
                title={card.title}
                name={card.name}
                rating={card.rating}
                imgUrl={card.imgUrl}
              />
            </Stack>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Stack>
    </>
  );
}

export default CourseList;
