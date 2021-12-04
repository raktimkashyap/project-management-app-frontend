import {
  Button,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DatePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ResetTv, RestoreOutlined } from "@mui/icons-material";

export default function CreateTaskView(props) {
  const {
    task,
    handleChange,
    handleCreate,
    handleClose,
    handleDueDate,
    existingTask,
  } = props;
  return (
    <Box my={1}>
      <Box>
        <Box
          px={2}
          py={1}
          mb={1.5}
          sx={{
            width: "100%",
            borderRadius: 1.5,
            border: "1px solid #030a0125",
          }}
        >
          <FormControl component="div" fullWidth size="small">
            <InputBase
              sx={{ fontWeight: "bold", fontSize: 16 }}
              fullWidth
              value={task.title}
              autoFocus
              placeholder="Eg. Read the latest news on React JS"
              name="title"
              onChange={handleChange}
              onKeyUp={(e) => {
                e.key === "Enter" && handleCreate(task);
              }}
            />
          </FormControl>
          <FormControl component="div" fullWidth size="small">
            <InputBase
              fullWidth
              multiline
              minRows={3}
              value={task.description}
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
          </FormControl>
          <Box display="flex" alignItems="center">
            <FormControl size="small" variant="outlined" name="priority">
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                label="priority"
                labelId="priority-label"
                sx={{ minWidth: 80 }}
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <MenuItem value={"low"}>Low</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"high"}>High</MenuItem>
              </Select>
            </FormControl>
            <Box ml={1} />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Schedule"
                clearable={true}
                showDaysOutsideCurrentMonth
                today
                mask=""
                inputFormat="D MMM yyyy"
                showTodayButton
                value={task.dueDate}
                onChange={handleDueDate}
                disablePast
                renderInput={(params) => (
                  <TextField
                    size="small"
                    name="dueDate"
                    color="primary"
                    sx={{ maxWidth: 165 }}
                    {...params}
                  />
                )}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <ResetTv />
                    </IconButton>
                  ),
                }}
              />
            </LocalizationProvider>
            {Boolean(task.dueDate) && (
              <IconButton
                size="small"
                onClick={() => {
                  handleDueDate(null);
                }}
              >
                <RestoreOutlined />
              </IconButton>
            )}
          </Box>
        </Box>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disableElevation
          disabled={!task.title.replace(/\s/g, "").length}
          onClick={handleCreate}
        >
          {existingTask ? "Save Changes" : "Add Task"}
        </Button>
        {/* <Box ml={2} /> */}
        <Button
          variant=""
          size="small"
          disableElevation
          sx={{ marginLeft: 1.5 }}
          onClick={handleClose}
        >
          cancel
        </Button>
      </Box>
    </Box>
  );
}
