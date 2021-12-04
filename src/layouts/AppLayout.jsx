import { Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/SideBar";
import TopAppBar from "../components/TopAppBar";

export default function AppLayout() {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "#fff",
          zIndex: 1002,
        }}
      >
        <TopAppBar />
      </Box>
      <Toolbar />
      <Box display="flex" sx={{ width: "100%", minHeight: "90vh" }}>
        <Box
          sx={{
            position: "relative",
            width: 320,
            height: "auto",
            background: "#f5f5f5",
          }}
          py={2}
        >
          <Box
            sx={{
              width: 320,
              position: "fixed",
              left: 0,
            }}
          >
            <Sidebar />
          </Box>
        </Box>
        <Box flex={1} px={10} py={2}>
          <Container>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}
