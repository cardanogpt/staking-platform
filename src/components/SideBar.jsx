"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/cardanogpt_full_logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const drawerWidth = 20;

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#0F0F0F",
          color: "secondary.main",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgColor: "secondary.500",
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}%`,
          boxSizing: "border-box",
        },
        "& .MuiButtonBase-root:hover": {
          backgroundColor: "secondary.300",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography component={Link} href="/" paddingY={"2rem"} paragraph sx={{}}>
        <Image src={logo} alt="" priority />
      </Typography>
      <List
        sx={{
          "& a.active": {
            borderLeft: "3px solid",
            borderColor: "primary.main",
            background:
              "linear-gradient(270deg, rgba(73, 223, 40, 0) 0%,rgba(73, 223, 40, 0.1) 100%)",
          },
        }}
      >
        <ListItem
          key={"Dashboard"}
          component={Link}
          href="/dashboard"
          disablePadding
          className={`${pathname === "/dashboard" ? "active" : ""}`}
        >
          <ListItemButton>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Staking"}
          component={Link}
          href="/stake"
          disablePadding
          className={`${pathname === "/stake" ? "active" : ""}`}
        >
          <ListItemButton>
            <ListItemText primary={"Stake "} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Manage Positions"}
          component={Link}
          href="/manage-positions"
          disablePadding
          className={`${pathname === "/manage-positions" ? "active" : ""}`}
        >
          <ListItemButton>
            <ListItemText primary={"Manage Positions"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
