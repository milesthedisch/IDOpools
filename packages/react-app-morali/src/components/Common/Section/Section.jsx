import React, { useState } from "react";
import { Paper } from "@mui/material";

const Section = (props) => {
  const [elevation, setElevation] = useState(5);

  return (
    <Paper
      elevation={elevation}
      onMouseEnter={() => {
        setElevation(11);
      }}
      onMouseLeave={() => {
        setElevation(5);
      }}
      sx={props.sx}
    >
        test
      {props.children}
    </Paper>
  );
};

export default Section;
