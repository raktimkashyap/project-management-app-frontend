import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";
import { theme } from "./utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAllTasks } from "./features/taskSlice";
import { getAllProjects } from "./features/projectSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
