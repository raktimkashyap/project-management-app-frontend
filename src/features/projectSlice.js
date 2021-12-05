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

export const getSingleProject = createAsyncThunk(
  "project/getSingleProject",
  async (projectId) => {
    const response = await axios.get(
      endpoints.project.getSingleProject(projectId)
    );
    return response.data;
  }
);

const initialState = {
  allProjects: [],
  projectTasks: [],
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
    [getSingleProject.fulfilled]: (state, { payload }) => {
      state.projectTasks = payload.tasks;
    },
  },
});

export default projectSlice.reducer;
