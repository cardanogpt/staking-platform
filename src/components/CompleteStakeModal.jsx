import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../assets/images/cardanogpt_logo.png";

const style = {
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "secondary.500",
  color: "rgba(255, 255, 255, 0.6)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minHeight: "30rem",
};

export default function CompleteStakeModal({ openModal, setModalOpen }) {
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display={"flex"}
            width="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <img style={{ width: "5rem", height: "5rem" }} src={logo} alt="" />
            <Typography variant="h4" color="#FFFFFF">
              Staking Completed
            </Typography>
            <Typography
              variant="caption"
              width="15rem"
              my="1.5rem"
              textAlign="center"
            >
              Hurray! You have successfully staked your CGI. Please guide your
              wallet
            </Typography>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={handleClose}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
