import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { setAuthToken } from "../utils/axios";
import endpoints from "../utils/endpoints";
import jwtDecode from "jwt-decode";

export const userSignUp = createAsyncThunk(
  "auth/userSignUp",
  async (userData) => {
    const { fullName, email, password } = userData;
    const response = await axios.post(endpoints.auth.signUp, {
      fullName,
      email,
      password,
    });
    return response.data;
  }
);

export const userSignIn = createAsyncThunk(
  "user/userSignIn",
  async (userData) => {
    const { email, password } = userData;
    const response = await axios.post(endpoints.auth.signIn, {
      email,
      password,
    });
    return response.data;
  }
);

const initialState = {
  authenticated: false,
  token: "",
  user: {
    fullName: "",
    email: "",
  },
  authenticating: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        setAuthToken(token);
        const user = jwtDecode(token);
        state.user = user;
        state.authenticated = true;
      }
    },
    signOut: (state) => {
      localStorage.clear();
      state.authenticated = false;
      state.token = "";
    },
  },
  extraReducers: {
    [userSignUp.pending]: (state) => {
      state.authenticating = true;
    },
    [userSignUp.fulfilled]: (state, { payload }) => {
      localStorage.setItem("accessToken", payload.accessToken);
      setAuthToken(payload.accessToken);
      const user = jwtDecode(payload.accessToken);
      state.user = user;
      state.authenticating = false;
      state.authenticated = true;
    },
    [userSignUp.rejected]: (state) => {
      state.authenticating = false;
      state.authenticated = false;
    },
    [userSignIn.pending]: (state) => {
      state.authenticating = true;
    },
    [userSignIn.fulfilled]: (state, { payload }) => {
      localStorage.setItem("accessToken", payload.accessToken);
      setAuthToken(payload.accessToken);
      const user = jwtDecode(payload.accessToken);
      state.user = user;
      state.authenticating = false;
      state.authenticated = true;
    },
    [userSignIn.rejected]: (state) => {
      state.authenticating = false;
      state.authenticated = false;
    },
  },
});

export const { signOut, authenticate } = authSlice.actions;
export default authSlice.reducer;
