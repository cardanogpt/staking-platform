import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/cardanogpt_logo.png";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { wallet } from "../data";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "secondary.500",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Main = () => {
  const [auth, setAuth] = useOutletContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={handleOpen}
        >
          Connect Wallet
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Connect Wallet
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="caption"
            sx={{ mt: 2 }}
          >
            By connecting your wallet, you agree to the Terms & Conditions and
            Privacy Policy
          </Typography>
          <List>
            {wallet.map((item) => (
              <ListItem
                key={item.name}
                component={Link}
                onClick={() => setAuth(true)}
                to="/dashboard"
              >
                <ListItemIcon>
                  <img
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    src={`logos/${item.name}.png`}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: "white",
                    "& .MuiListItemText-secondary": {
                      color: "secondary.main",
                      fontSize: "0.6rem",
                    },
                  }}
                  primary={`${item.name} Wallet`}
                  secondary={`Connect to your ${item.name} wallet on your browser extension`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </Box>
  );
};

export default Main;
