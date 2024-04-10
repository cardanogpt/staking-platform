import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

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
        {/*  show pc only text if viewed on mobile */}
        {window.innerWidth < 768 ? (
          <Box
            display="flex"
            alignItems="center"
            color="secondary.main"
            bgcolor="secondary.600"
            padding="1rem"
            width="100%"
            textAlign="center"
          >
            <h1>PC View Only</h1>
          </Box>
        ) : (
          <Outlet />
        )}
      </Box>
    </>
  );
}

export default App;
