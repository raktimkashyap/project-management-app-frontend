import { DateRangeOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React from "react";
import CreateTask from "../CreateTask";

export default function TaskDetailDialog(props) {
  const { task, editMode, handleClose, toggleEditMode } = props;
  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ flex: 1 }}>
          Task
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        {!editMode && (
          <Box onClick={() => toggleEditMode(true)}>
            <Typography gutterBottom variant="h6" sx={{ fontSize: 18 }}>
              {task.title}
            </Typography>
            <Box mt={2} />
            {task.description && (
              <React.Fragment>
                <Typography variant="subtitle2" color="textSecondary">
                  Description:
                </Typography>
                <Typography gutterBottom variant="body2">
                  {task.description}
                </Typography>
              </React.Fragment>
            )}

            <Box display="flex" alignItems="center" mt={3}>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2" color="textSecondary">
                  Priority: {task.priority}
                </Typography>
              </Box>
              {task.dueDate && (
                <Box display="flex" ml={2}>
                  <DateRangeOutlined
                    sx={{ height: 18, width: "auto" }}
                    color="action"
                  />
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    style={{ marginLeft: 5 }}
                  >
                    {moment(task.dueDate).format("D MMM YYYY")}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        )}
        {editMode && (
          <CreateTask
            existingTask={task}
            handleClose={() => toggleEditMode(false)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
