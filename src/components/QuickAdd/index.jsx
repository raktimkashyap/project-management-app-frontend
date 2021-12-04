import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import CreateTask from "../CreateTask";

export default function QuickAdd(props) {
  const { handleClose } = props;
  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Quick Add Task</DialogTitle>
      <DialogContent dividers>
        <CreateTask handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
