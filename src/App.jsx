import React, { useState } from "react";
import { Box, Stack, createTheme } from "@mui/material";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [mode, setMode] = useState("dark");

  const DarkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
