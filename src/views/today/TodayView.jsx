import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import TaskItem from "../../components/TaskItem";

export default function TodayView() {
  const { today } = useSelector((state) => state.taskReducer);

  return (
    <React.Fragment>
      <Typography variant="h6">
        <b>Today</b>
      </Typography>

      <Box my={2}>
        {[...today].map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </Box>
    </React.Fragment>
  );
}
