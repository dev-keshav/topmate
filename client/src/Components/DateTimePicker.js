// BasicDateTimePicker.jsx
import React from 'react';
import BasicDateTimePicker from "./Datetime";

const DateTimePicker = ({ value, label, onChange }) => {
  return (
    <BasicDateTimePicker
      label={label}
      value={value}
      onChange={(date) => {
        onChange(date); // Passes the selected date back to the parent component
      }}
    />
    
  );
};

export default DateTimePicker;
