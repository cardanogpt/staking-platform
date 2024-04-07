import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/cardanogpt_logo.png";

const Dashboard = () => {
  return (
    <Box
      component="main"
      display={"flex"}
      width="100%"
      alignItems="center"
      justifyContent="center"
      sx={{ color: "secondary.main", p: 3 }}
    >
      <Box
        display={"flex"}
        width="20rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <img style={{ width: "5rem", height: "5rem" }} src={logo} alt="" />
        <Typography variant="h5" color="#FFFFFF">
          Connect Wallet
        </Typography>
        <Typography variant="caption" pb="1rem" textAlign="center">
          Connect your Cardano wallet to view your Chaincrib dashboard and
          assets
        </Typography>
        <Button sx={{ textTransform: "none" }} variant="contained">
          Connect Wallet
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
