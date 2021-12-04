import { Typography, IconButton } from "@mui/material";
import { DateRangeOutlined, DeleteOutline, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/taskSlice";
import ConfirmDelete from "../ConfirmDelete";
import moment from "moment";
import CreateTask from "../CreateTask";
import TaskDetails from "../TaskDetails";

export default function TaskItemView(props) {
  const { task } = props;
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = React.useState(false);
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [taskDetailsOpen, setTaskDetailsOpen] = React.useState(false);

  const toggleEditOpen = (value) => {
    setEditOpen(value);
    setShowOptions(false);
  };

  const toggleTaskDetails = (value) => {
    setTaskDetailsOpen(value);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
    setDeleteConfirm(false);
  };
  return (
    <React.Fragment>
      {editOpen && (
        <CreateTask
          existingTask={task}
          handleClose={() => toggleEditOpen(false)}
        />
      )}
      {!editOpen && (
        <Box
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
          py={1}
          // my={1}
          sx={{
            width: "100%",
            minHeight: 55,
            borderBottom: "1px solid #00000015",
            userSelect: "none",
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            flex={1}
            onClick={() => toggleTaskDetails(true)}
            sx={{ cursor: "pointer" }}
          >
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  height: 15,
                  width: 15,
                  borderRadius: 30,
                  border: "4px solid",
                  borderColor:
                    task.priority === "low"
                      ? "yellow"
                      : task.priority === "medium"
                      ? "orange"
                      : "orangered",
                }}
                mr={2}
              />

              <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
                {task.title}
              </Typography>
            </Box>
            {Boolean(task.dueDate) && (
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    height: 15,
                    width: 15,
                  }}
                  mr={1.8}
                />
                <Box display="flex" alignItems="center">
                  <Box mr={0.5}>
                    <DateRangeOutlined
                      sx={{ height: 16, width: "auto" }}
                      color="action"
                    />
                  </Box>
                  <Typography variant="caption" color="textSecondary">
                    {moment(task.dueDate).format("D MMM YYYY")}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
          {showOptions && (
            <Box display="flex" alignItems="center" sx={{ userSelect: "none" }}>
              <IconButton size="small" onClick={() => toggleEditOpen(true)}>
                <Edit color="action" />
              </IconButton>
              <IconButton size="small" onClick={() => setDeleteConfirm(true)}>
                <DeleteOutline color="action" />
              </IconButton>
            </Box>
          )}
        </Box>
      )}
      {taskDetailsOpen && (
        <TaskDetails
          task={task}
          handleClose={() => toggleTaskDetails(false)}
          editMode
        />
      )}
      {deleteConfirm && (
        <ConfirmDelete
          title={"Delete task"}
          itemName={task.title}
          handleConfirm={() => handleDelete(task._id)}
          confirmAction="Delete"
          handleClose={() => setDeleteConfirm(false)}
        />
      )}
      {}
    </React.Fragment>
  );
}
