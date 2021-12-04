import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    common: {
      black: "#252525",
      white: "#FFFFFF",
    },
    primary: {
      main: "#181D31",
    },
    secondary: {
      main: "#678983",
    },
    text: {
      primary: "#151515",
    },
  },
  shape: {
    borderRadius: 6,
  },
  mixins: {
    toolbar: {
      minHeight: 50,
    },
  },
});
