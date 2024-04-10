import React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { stakeDetails } from "../data";
import ErrorPopup from "./ErrorPopup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "secondary.500",
  border: "2px solid #000",
  boxShadow: 24,
  color: "rgba(255, 255, 255, 0.6)",
  p: 4,
};

const ListItemObj = ({ title, value }) => (
  <ListItem sx={{ padding: "0" }}>
    <ListItemText
      primary={title}
      secondary={value}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        "& .MuiListItemText-primary, .MuiListItemText-secondary": {
          fontSize: "0.8rem",
        },
        "& .MuiListItemText-secondary": {
          color: "secondary.main",
        },
      }}
    />
  </ListItem>
);

const PillButton = ({ num, setDuration }) => (
  <Button
    variant="outlined"
    color="secondary"
    sx={{ fontSize: "0.6rem", textTransform: "none", padding: "0.7rem 1.4rem" }}
    onClick={() => setDuration(num)}
  >
    {num} Months
  </Button>
);

const StakeModal = ({ setModalOpen, openModal, setCompleteModalOpen }) => {
  const [, setDuration] = React.useState(0);
  const handleClose = () => setModalOpen(false);

  const submitStake = () => {
    // submit stake
    handleClose();
    setCompleteModalOpen(true);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="#ffffff"
        >
          Stake CGI
        </Typography>
        <Typography sx={{ mt: 2 }}>Duration</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <PillButton num={1} setDuration={setDuration} />
          <PillButton num={3} setDuration={setDuration} />
          <PillButton num={6} setDuration={setDuration} />
          <PillButton num={12} setDuration={setDuration} />
        </Box>
        <Typography display="flex" flexDirection="column" mt="1rem">
          Amount to Lock
          <input
            style={{
              border: "1px solid #ffffffb4",
              borderRadius: "20px",
              my: "0.5rem",
              background: "transparent",
              padding: "1rem 2rem",
              color: "#ffffffb4",
              outline: "none",
            }}
          />
        </Typography>
        <Typography display="flex" flexDirection="column" fontSize="0.6rem">
          Available CGI: 12.30 ($12.02)
        </Typography>
        <Box display="flex" justifyContent="space-between" mt="1rem">
          <Typography color="white" fontWeight="bold">
            Summary
          </Typography>
          <Typography color="white">Show More</Typography>
        </Box>
        {/* js object */}
        <List>
          <ListItemObj
            title="Total APY"
            value={`${stakeDetails["Total APY"]}`}
          />
          <ListItemObj title="Base APY" value={`${stakeDetails["Base APY"]}`} />
          <ListItemObj
            title="APY Boost"
            value={`${stakeDetails["APY Boost"]}`}
          />
          <ListItemObj
            title="Total Available Rewards"
            value={`${stakeDetails["Total Available Rewards"]}`}
          />
          <ListItemObj
            title="Unlock Date"
            value={`${stakeDetails["Unlock Date"]}`}
          />
          <ListItemObj
            title="Total Interest"
            value={`${stakeDetails["Total Interest"]}`}
          />
        </List>
        <Button
          onClick={submitStake}
          variant="contained"
          sx={{ mt: "1rem", width: "100%", textTransform: "none" }}
        >
          Confirm Stake
        </Button>
        <ErrorPopup />
      </Box>
    </Modal>
  );
};

export default StakeModal;
