import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Box>
      {/* Error Demo Display */}
      <Button onClick={handleClick(SlideTransition)}>Popup Error</Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="outlined"
          icon={false}
          action={
            <Button
              color="inherit"
              onClick={handleClose}
              size="small"
              sx={{ alignSelf: "center" }}
            >
              <HighlightOffIcon />
            </Button>
          }
          sx={{
            width: "500px",
            backgroundColor: "#ffffff",
            color: "secondary.500",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="h6"
            color="#E80101"
            fontWeight={700}
            fontSize={"1.5rem"}
          >
            Error In Staking
          </Typography>
          <Typography paragraph maxWidth={450} color={"secondary.main"}>
            Oops! We noticed you don’t have enough CGI to complete this staking,
            please add more CGI to your wallet.
          </Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}
