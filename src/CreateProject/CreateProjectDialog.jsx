import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputBase,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function CreateProjectDialog(props) {
  const { project, handleChange, handleSubmit, handleClose } = props;
  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Create Project</DialogTitle>
      <DialogContent dividers>
        <Box
          sx={{ borderRadius: 1.5, border: "1px solid #00000025", p: 1 }}
          mb={2}
        >
          <InputBase
            value={project.title}
            fullWidth
            sx={{ fontSize: 18, fontWeight: 500 }}
            required
            name="title"
            placeholder="Project Title"
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <InputBase
            value={project.description}
            fullWidth
            multiline
            required
            placeholder="you project description here"
            minRows={4}
            name="description"
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            size="small"
            disableElevation
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Create Project
          </Button>
          <Box ml={1} />
          <Button size="small" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </DialogContent>
      {/* <DialogActions></DialogActions> */}
    </Dialog>
  );
}
