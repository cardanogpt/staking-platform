import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const gradientText = {
  alignSelf: "self-start",
  background:
    "linear-gradient(91.9deg, rgba(237, 252, 234, 0.7) 1.89%, rgba(112, 112, 112, 0.7) 99.49%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const CardObj = ({
  width,
  title,
  amount,
  outlined,
  buttonText1,
  buttonText2,
  handleModalOpen,
  image,
  secondary,
}) => {
  return (
    <Paper
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "secondary.500",
        width: { width },
        minWidth: "300px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        gap: "1rem",
        border: "1px solid ",
        borderColor: "secondary.300",
        borderRadius: "3rem",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.3)",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "bold",
          ...gradientText,
        }}
      >
        {amount}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        {buttonText1 && (
          <Button
            onClick={handleModalOpen}
            variant={outlined ? "outlined" : "contained"}
            sx={{ textTransform: "none" }}
            color={secondary ? "secondary" : "primary"}
          >
            {buttonText1}
          </Button>
        )}
        {buttonText2 && (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            {buttonText2}
          </Button>
        )}
      </Box>
      {image && (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            bottom: "-17%",
            right: "-5%",
            transform: "rotate(-45deg)",
            opacity: "0.9",
          }}
        />
      )}
    </Paper>
  );
};

export default CardObj;
