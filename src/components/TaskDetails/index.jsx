import React from "react";
import TaskDetailDialog from "./TaskDetailDialog";

export default function TaskDetails(props) {
  const { task, handleClose } = props;
  const [editMode, setEditMode] = React.useState(false);
  const toggleEditMode = (value) => {
    setEditMode(value);
    console.log(value);
  };
  return (
    <TaskDetailDialog
      task={task}
      handleClose={handleClose}
      editMode={editMode}
      toggleEditMode={toggleEditMode}
    />
  );
}
