import { AddOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CreateTask from "../../components/CreateTask";
import TaskItem from "../../components/TaskItem";

export default function TasksView(props) {
  const { allTasks, title } = props;

  const [taskCreateOpen, setTaskCreateOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Typography variant="h6">
        <b>{title}</b>
      </Typography>

      <Box my={2}>
        {[...allTasks].map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </Box>
      <Box>
        {!taskCreateOpen && (
          <Button
            disableElevation
            onClick={() => setTaskCreateOpen(true)}
            startIcon={<AddOutlined />}
            size="small"
            color="secondary"
          >
            Add a new task
          </Button>
        )}
        {taskCreateOpen && (
          <CreateTask handleClose={() => setTaskCreateOpen(false)} />
        )}
      </Box>
    </React.Fragment>
  );
}
