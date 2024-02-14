import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#134245",
      light: "pink",
    },
    secondary: {
      main: "#123457",
      light: "skyblue",
      "&hover": {
        backgroundColor: "white",
      },
    },
  },
});

export default theme;
