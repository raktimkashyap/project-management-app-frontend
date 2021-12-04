import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function Authenticated() {
  const { authenticated } = useSelector((state) => state.authReducer);

  return authenticated ? <Outlet /> : <Navigate replace to="/sign-in" />;
}
