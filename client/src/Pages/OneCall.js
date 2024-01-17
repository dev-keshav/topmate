import React from "react";
import { Stack } from "@mui/material";
import BasicCard from "../Components/Card";

const OneCall = () => {
  return (
    
    <Stack direction="row" spacing={4} useFlexGap flexWrap="wrap">
      <Stack>
        <BasicCard
          title="1:1 Call"
          name="1:1 Mentorship"
          time="30 min meeting"
          oldprice="₹600"
          newprice="₹500"
          rating="4"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="1:1 Call"
          name="Mock interview"
          time="60 min meeting"
          oldprice="₹1500"
          newprice="₹1000"
          rating="5"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="1:1 Call"
          name="Resume review"
          time="60 min meeting"
          oldprice="₹800"
          newprice="₹600"
          rating="3"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="1:1 Call"
          name="Career guidance"
          time="30 min meeting"
          oldprice="₹500"
          newprice="₹400"
          rating="4"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="1:1 Call"
          name="Quick Chat"
          time="30 min meeting"
          oldprice="₹500"
          newprice="₹300"
          rating="4"
        />
      </Stack>

      <Stack>
        <BasicCard
          title="1:1 Call"
          name="Interview prep & tips"
          time="30 min meeting"
          oldprice=""
          newprice="₹300"
          rating="3"
        />
      </Stack>
    </Stack>
  );
};

export default OneCall;
