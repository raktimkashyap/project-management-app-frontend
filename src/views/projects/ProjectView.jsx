import { Typography, Box } from "@mui/material";
import React from "react";

export default function ProjectView(props) {
  const { project } = props;
  return (
    <React.Fragment>
      <Typography variant="h6">
        <b>{project.title}</b>
      </Typography>
      <Box mb={2}></Box>
    </React.Fragment>
  );
}
