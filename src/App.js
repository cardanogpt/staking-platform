import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import Dashboard from "./scenes/Dashboard";

const drawerWidth = 240;

function App() {
  return (
    <Box height={"100vh"} sx={{ display: "flex", bgcolor: "secondary.600" }}>
      <CssBaseline />
      <Nav title="Dashboard" drawerWidth={drawerWidth} />
      <SideBar />
      <Dashboard />
    </Box>
  );
}

export default App;
