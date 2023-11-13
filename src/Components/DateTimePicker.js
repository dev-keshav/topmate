// BasicDateTimePicker.jsx
import React from "react";
import BasicDateTimePicker from "./Datetime";

const DateTimePicker = ({ value, label, onChange }) => {
  return (
    <BasicDateTimePicker
      label="DateTime"
      value={userData.time || new Date()} // Display the picked date or current date
      onChange={(dateString) => {
        handleDateChange(dateString);
      }}
    />
  );
};

export default DateTimePicker;
