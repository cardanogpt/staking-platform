import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

const drawerWidth = 20;

function App() {
  const [auth, setAuth] = React.useState(false);
  return (
    <>
      <ScrollTop />
      <Box
        minHeight={"100vh"}
        width={"100vw"}
        sx={{ display: "flex", bgcolor: "secondary.600", color: "#ffffff" }}
      >
        <CssBaseline />
        <Nav
          auth={auth}
          setAuth={setAuth}
          title="Dashboard"
          drawerWidth={drawerWidth}
        />
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
          <Box minWidth={"500px"} ml={`${drawerWidth}%`} width={"100%"}>
            <Outlet context={[auth, setAuth]} />
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
