import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Help } from "@mui/icons-material";

const navTitles = {
  "/": "Connect",
  "/dashboard": "Dashboard",
  "/stake": "Stake",
  "/manage-positions": "Manage Positions",
};

const Nav = ({ title = "Dashboard", drawerWidth }) => {
  const location = window.location.pathname;
  console.log(location);
  useEffect(() => {
    document.title = navTitles[location];
  }, [location]);
  const [auth, setAuth] = React.useState(true);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        height: "6rem",
        ml: `${drawerWidth}px`,
        bgcolor: "secondary.500",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#FFFFFF" }}
        >
          {navTitles[location]}
        </Typography>
        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{
                color: "primary.main",
                p: 1,
                backgroundColor: "rgba(73, 223, 40, 0.1)",
                border: "1px solid rgba(146, 236, 126, 0.2)",
                borderRadius: "2px",
              }}
            >
              <Help />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
