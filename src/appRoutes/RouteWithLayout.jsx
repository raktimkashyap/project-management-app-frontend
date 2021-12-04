import React from "react";
import { Outlet } from "react-router";
import AppLayout from "../layouts/AppLayout";

export default function RouteWithLayout({ path, element }) {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
