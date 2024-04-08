import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import Dashboard from "./scenes/Dashboard";
import Transaction from "./components/TransactionHistory";

const drawerWidth = 240;

function App() {
  return (
    <Box
      minHeight={"100vh"}
      sx={{ display: "flex", bgcolor: "secondary.600", color: "#ffffff" }}
    >
      <CssBaseline />
      <Nav title="Dashboard" drawerWidth={drawerWidth} />
      <SideBar />
      <Transaction />
    </Box>
  );
}

export default App;
