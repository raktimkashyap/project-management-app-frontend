import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export default function ConfirmDelete(props) {
  const { title, itemName, handleClose, handleConfirm, confirmAction } = props;
  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Are you sure you want to delete: <b>{itemName}</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          disableElevation
          onClick={handleClose}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="inherit">
          {confirmAction}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
