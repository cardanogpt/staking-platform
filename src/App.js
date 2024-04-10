import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

function App() {
  return (
    <>
      <ScrollTop />
      <Box
        minHeight={"100vh"}
        width={"100vw"}
        sx={{ display: "flex", bgcolor: "secondary.600", color: "#ffffff" }}
      >
        <CssBaseline />
        <Nav title="Dashboard" drawerWidth={drawerWidth} />
        <SideBar />
        <Outlet />
      </Box>
    </>
  );
}

export default App;
