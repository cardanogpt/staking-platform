import React from "react";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { stakeDetails } from "../data";
import ErrorPopup from "./ErrorPopup";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

const PillButton = ({ num, setDuration, active }) => (
  <Button
    variant="outlined"
    color="secondary"
    sx={{
      position: "relative",
      fontSize: "0.6rem",
      textTransform: "none",
      padding: "0.7rem 1rem",
      borderRadius: "15px",
      borderColor: active ? "#E6DC0B" : "secondary.300",
      color: active ? "white" : "secondary.200",
      "&:hover": {
        borderColor: active ? "#E6DC0B" : "secondary.200",
      },
    }}
    onClick={() => setDuration(num)}
  >
    {active && (
      <CheckCircleOutlineIcon
        sx={{
          position: "absolute",
          top: "3px",
          right: "5px",
          color: "black",
          fontSize: "0.7rem",
          background: "linear-gradient(180deg, #E6DC0B 0.15%, #49DF28 129.41%)",
          borderRadius: "50%",
        }}
      />
    )}
    {num} Months
  </Button>
);

const StakeModal = ({ setModalOpen, openModal, setCompleteModalOpen }) => {
  const [duration, setDuration] = React.useState(0);
  const handleClose = () => setModalOpen(false);

  const submitStake = () => {
    // submit stake
    handleClose();
    setCompleteModalOpen(true);
  };

  return (
    <Dialog
      open={openModal}
      scroll="body"
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        backdropFilter: "blur(5px)",
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
          id="scroll-dialog-title"
          variant="h6"
          component="h2"
          color="#ffffff"
          display="flex"
          justifyContent="space-between"
        >
          Stake CGI
          <Button onClick={handleClose} sx={{ color: "#ffffff" }}>
            <HighlightOffIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 2 }}>Duration</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <PillButton
              num={1}
              setDuration={setDuration}
              active={duration === 1}
            />
            <PillButton
              num={3}
              setDuration={setDuration}
              active={duration === 3}
            />
            <PillButton
              num={6}
              setDuration={setDuration}
              active={duration === 6}
            />
            <PillButton
              num={12}
              setDuration={setDuration}
              active={duration === 12}
            />
          </Box>
          <Box display="flex" flexDirection="column" mt="1rem">
            Amount to Lock
            <input
              style={{
                border: "1px solid #ffffff",
                borderRadius: "20px",
                margin: "0.5rem 0",
                background: "transparent",
                padding: "1rem 2rem",
                color: "#ffffffb4",
                outline: "none",
              }}
            />
          </Box>
          <Typography display={"flex"} gap={1} fontSize="0.6rem">
            Available CGI: <Box fontWeight={"bold"}> 12.30 ($12.02)</Box>
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
            <ListItemObj
              title="Base APY"
              value={`${stakeDetails["Base APY"]}`}
            />
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={submitStake}
            variant="contained"
            sx={{ mt: "1rem", width: "100%", textTransform: "none" }}
          >
            Confirm Stake
          </Button>
        </DialogActions>
        <ErrorPopup />
      </Box>
    </Dialog>
  );
};

export default StakeModal;
