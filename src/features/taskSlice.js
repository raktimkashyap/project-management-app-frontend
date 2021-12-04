import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import endpoints from "../utils/endpoints";

export const getAllTasks = createAsyncThunk("task/getAllTasks", async () => {
  const response = await axios.get(endpoints.task.getAllTasks);
  return response.data;
});

export const createTask = createAsyncThunk(
  "task/createTask",
  async (taskData) => {
    const { title, description, priority, dueDate, projectId } = taskData;

    const response = await axios.post(endpoints.task.createTask, {
      title,
      description,
      priority,
      dueDate,
      projectId,
    });
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId) => {
    const response = await axios.delete(endpoints.task.deleteTask(taskId));
    return { res: response.data, taskId: taskId };
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (taskData) => {
    const { taskId, title, description, priority, dueDate, projectId } =
      taskData;

    await axios.patch(endpoints.task.updateTask(taskId), {
      title,
      description,
      priority,
      dueDate,
      projectId,
    });
    return { taskData: taskData };
  }
);

export const getTasksByDueDate = createAsyncThunk(
  "task/getTasksByDueDate",
  async (date) => {
    const response = await axios.get(endpoints.task.getTasksByDueDate(date));
    return response.data;
  }
);

const initialState = {
  allTasks: [],
  today: [],
  taskDetails: {},
  creatingTask: false,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: {
    [createTask.pending]: (state) => {
      state.creatingTask = true;
    },
    [createTask.fulfilled]: (state, { payload }) => {
      state.creatingTask = false;
      state.allTasks.push(payload.task);
      if (
        new Date(payload.task.dueDate).toLocaleDateString ===
        new Date().toLocaleDateString
      ) {
        state.today.push(payload.task);
      }
    },
    [createTask.rejected]: (state) => {
      state.creatingTask = false;
    },
    [getAllTasks.fulfilled]: (state, { payload }) => {
      state.allTasks = payload.tasks;
      state.today = payload.tasks.filter(
        (task) =>
          new Date(task.dueDate).toLocaleDateString() ===
          new Date().toLocaleDateString()
      );
    },
    [deleteTask.fulfilled]: (state, { payload }) => {
      let index = state.allTasks.findIndex(({ _id }) => _id === payload.taskId);
      state.allTasks.splice(index, 1);
    },
    [updateTask.fulfilled]: (state, { payload }) => {
      const index = state.allTasks.findIndex(
        (task) => task._id === payload.taskData.taskId
      );
      state.allTasks[index] = {
        ...state.allTasks[index],
        ...payload.taskData,
      };
    },
    [getTasksByDueDate.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.today = payload.tasks;
    },
  },
});

export default taskSlice.reducer;
