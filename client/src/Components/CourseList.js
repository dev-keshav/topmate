import React, { useEffect, useState } from "react";
import CourseBox from "./CourseBox";
import { Stack, Typography, Button, Skeleton } from "@mui/material";

function CourseList() {
  const [courseData, setCourseData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(6); // Show 6 items initially
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    fetch("https://pipc.onrender.com/v1/api/contentBoxData")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        setCourseData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleShowMore = () => {
    setDisplayedItems(courseData.length);
    setShowMoreButton(false);
  };

  const handleShowLess = () => {
    setDisplayedItems(6);
    setShowMoreButton(true);
  };

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
          courseData.slice(0, displayedItems).map((card) => (
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
          <p>Loading...
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: '50vw', height: '20vh' }} />
            <Skeleton variant="circular" sx={{ width: '10vw', height: '20vh' }} />
            <Skeleton
              sx={{ width: '50vw', height: '20vh'  }}
              variant="rounded"
            />
          </p>
        )}
      </Stack>
      {courseData.length > 6 && showMoreButton && (
        <Stack direction="row" justifyContent="center" mt={12} >
          <Button
            onClick={handleShowMore}
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#000000", color: "#ffffff", textTransform: 'none' }} // Black button style
          >
            Show More
          </Button>
        </Stack>
      )}
      {displayedItems > 6 && (
        <Stack direction="row" justifyContent="center" mt={12}>
          <Button
            onClick={handleShowLess}
            variant="outlined"
            color="secondary"
            sx={{ backgroundColor: "#ffffff", color: "#000000", textTransform: 'none' }} // Black button style
          >
            Show Less
          </Button>
        </Stack>
      )}
    </>
  );
}

export default CourseList;
