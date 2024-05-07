import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/cardanogpt_logo.png";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { wallet } from "../data";
import Link from "next/link";
import Image from "next/image";

const Home = ({ setAuth }) => {
  //handle connect wallet modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      component="main"
      display={"flex"}
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ color: "secondary.main", p: 3 }}
    >
      <Head>
        <title>CardanoGPT Stake</title>
        <meta
          name="description"
          content="harnessing the potential of AI to drive web3 initiatives and communities forward"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display={"flex"}
        width="20rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image style={{ width: "5rem", height: "5rem" }} src={logo} alt="" />
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
      <Dialog
        open={open}
        scroll="body"
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          backdropFilter: "blur(5px)",
          borderRadius: "3rem",
        }}
      >
        <Box
          sx={{
            bgcolor: "secondary.600",
            width: 420,
            border: "1px solid ",
            borderColor: "secondary.300",
            py: "2rem",
          }}
        >
          <DialogTitle
            id="modal-modal-title"
            variant="h6"
            component="h2"
            display="flex"
            justifyContent="space-between"
            color={"#ffffff"}
          >
            Connect Wallet
            <Button onClick={handleClose} sx={{ color: "#ffffff" }}>
              <HighlightOffIcon />
            </Button>
          </DialogTitle>
          <DialogContent>
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
                  href="/dashboard"
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
                      "& .MuiListItemText-primary": {
                        color: "#ffffff",
                      },
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
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Home;
