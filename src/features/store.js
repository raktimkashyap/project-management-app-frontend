import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";
import projectReducer from "./projectSlice";

export default configureStore({
  reducer: {
    authReducer: authReducer,
    taskReducer: taskReducer,
    projectReducer: projectReducer,
  },
});
