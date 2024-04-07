import React from "react";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
console.log(drawerWidth);

export const SideBar = () => {
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
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography paddingY={"2rem"} alignSelf={"center"} paragraph>
        CardanoGPT
      </Typography>
      <List>
        <ListItem key={"Dashboard"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Staking"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Stake "} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Manage Positions"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Manage Positions"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
