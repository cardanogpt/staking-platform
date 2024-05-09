import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Help } from "@mui/icons-material";
import profile from "../assets/images/profile.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = ({ drawerWidth, auth }: { drawerWidth: number; auth: boolean }) => {
  const pathname = usePathname();
  const title = pathname.split("/")[1].replace("-", " ") || "Home";

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}%)`,
        height: "6rem",
        ml: `${drawerWidth}%`,
        bgcolor: "secondary.500",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#FFFFFF" }}
          textTransform={"capitalize"}
        >
          {title}
        </Typography>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{
              color: "primary.main",
              p: 1.5,
              backgroundColor: "rgba(73, 223, 40, 0.1)",
              border: "1px solid rgba(146, 236, 126, 0.2)",
              borderRadius: "2px",
            }}
          >
            <Help />
          </IconButton>
          {auth && (
            <Box
              display={"flex"}
              // backgroundColor="#49DF281A"
              alignItems={"center"}
              px={2}
              borderRadius={1}
              gap={1}
              justifyContent={"space-evenly"}
              border="1px solid rgba(146, 236, 126, 0.2)"
            >
              <Image
                src={profile}
                alt="profile"
                style={{
                  alignItems: "center",
                }}
              />
              <Box>
                <Typography color="secondary" variant="caption">
                  Wallet Address
                </Typography>
                <Typography sx={{ color: "#FFFFFF" }}>addre.sdjandj</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
