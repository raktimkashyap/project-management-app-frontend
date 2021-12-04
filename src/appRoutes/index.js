import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "../views/auth/SignIn/";
import SignUp from "../views/auth/SignUp/";
import TasksPage from "../views/tasks/";
import Authenticated from "./Authenticated";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../features/authSlice";
import AppLayout from "../layouts/AppLayout";
import Today from "../views/today";

function PublicRoutes() {
  return (
    <Routes>
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate replace to="/sign-in" />} />
    </Routes>
  );
}
function ProtectedRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Authenticated />}>
          <Route exact path="/all-tasks" element={<TasksPage />} />
          <Route exact path="/today" element={<Today />} />
          <Route path="/" element={<Navigate replace to="/all-tasks" />} />
          <Route
            path="/sign-in"
            element={<Navigate replace to="/all-tasks" />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default function AppRoutes(props) {
  const { authenticated } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authenticated) {
      dispatch(authenticate());
    }
  }, [dispatch, authenticated]);

  return (
    <React.Fragment>
      {authenticated ? <ProtectedRoutes /> : <PublicRoutes />}
    </React.Fragment>
  );
}
