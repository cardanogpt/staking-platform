import * as React from "react";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/cardanogpt_logo.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Image from "next/image";

export default function CompleteStakeModal({
  openModal,
  setModalOpen,
}: {
  openModal: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Dialog
        open={openModal}
        scroll="body"
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          backdropFilter: "blur(5px)",
          borderRadius: "3rem",
        }}
      >
        <HighlightOffIcon
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            cursor: "pointer",
          }}
        />
        <DialogContent
          sx={{
            bgcolor: "secondary.600",
            minHeight: 300,
            border: "1px solid ",
            borderColor: "secondary.300",
            py: "4rem",
          }}
        >
          <Box
            display={"flex"}
            width="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image
              style={{ width: "5rem", height: "5rem" }}
              src={logo}
              alt=""
            />
            <DialogTitle variant="h4" color="#FFFFFF">
              Staking Completed
            </DialogTitle>
            <Typography variant="caption" width="15rem" textAlign="center">
              Hurray! You have successfully staked your CGI. Please guide your
              wallet
            </Typography>
            <DialogActions>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ textTransform: "none", width: "100%" }}
              >
                Continue
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
