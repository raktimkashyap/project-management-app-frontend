import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import endpoints from "../utils/endpoints";

export const createProject = createAsyncThunk(
  "project/createProject",
  async (data) => {
    const { title, description } = data;
    const response = await axios.post(endpoints.project.createProject, {
      title,
      description,
    });
    return response.data;
  }
);
export const getAllProjects = createAsyncThunk(
  "project/getAllProjects",
  async () => {
    const response = await axios.get(endpoints.project.getAllProject);
    return response.data;
  }
);

const initialState = {
  allProjects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.allProjects = payload.projects;
    },
    [createProject.fulfilled]: (state, { payload }) => {
      state.allProjects = [...state.allProjects, payload.project];
    },
  },
});

export default projectSlice.reducer;
