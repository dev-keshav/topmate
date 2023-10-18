import { Stack } from "@mui/material";
import React from "react";
import BasicCard from "../Components/Card";

const Priority = () => {
  return (
    <Stack direction='row' spacing={4} useFlexGap flexWrap="wrap" >
      <Stack>
        <BasicCard
          title="Priority DM"
          name="Ask me anything"
          time="replies in 2 days"
          oldprice="₹150"
          newprice="₹100"
          rating="4"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="Priority DM"
          name="Priority DM"
          time="replies in 2 days"
          oldprice="₹100"
          newprice="₹0"
          rating="4"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="Priority DM"
          name="Have a question?"
          time="replies in 2 days"
          oldprice=""
          newprice="₹0"
          rating="2"
        />
      </Stack>
    </Stack>
  );
};

export default Priority;
