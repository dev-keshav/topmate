import React, { useState, useEffect } from "react";
import BasicCard from "./Card";
import { Stack } from "@mui/material";

function All() {
  const [basicCardData, setBasicCardData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://pipc.onrender.com/v1/api/basicCards")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setBasicCardData(data)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures that the effect runs once after the initial render

  return (
    <Stack direction="row" spacing={4} useFlexGap flexWrap="wrap">
      {basicCardData.map((card) => (
        <Stack key={card.id}>
          <BasicCard
            title={card.title}
            name={card.name}
            time={card.time}
            oldprice={card.oldprice}
            newprice={card.newprice}
            modalPara={card.modalPara}
            rating={card.rating}
          />
        </Stack>
      ))}
    </Stack>
  );
}

export default All;
