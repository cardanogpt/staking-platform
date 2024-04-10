import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const gradientText = {
  alignSelf: "self-start",
  background:
    "linear-gradient(91.9deg, rgba(237, 252, 234, 0.7) 1.89%, rgba(112, 112, 112, 0.7) 99.49%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const CardObj = ({
  width,
  title1,
  title2,
  amount1,
  amount2,
  buttonText1,
  buttonText2,
  disabled,
}) => {
  return (
    <Paper
      sx={{
        bgcolor: "secondary.500",
        width: { width },
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "2rem",
        border: "1px solid ",
        borderColor: "secondary.300",
        borderRadius: "3rem",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.3)",
          }}
        >
          {title1}
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            ...gradientText,
          }}
        >
          {amount1}
        </Typography>
        <Box>
          {buttonText1 && (
            <Button variant="outlined" sx={{ textTransform: "none" }}>
              {buttonText1}
            </Button>
          )}
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ border: "1px solid rgba(41, 41, 41, 0.7)" }}
      />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.3)",
          }}
        >
          {title2}
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            ...gradientText,
          }}
        >
          {amount2}
        </Typography>
        <Box>
          {buttonText2 && (
            <Button
              variant="outlined"
              color="secondary"
              disabled={disabled}
              sx={{
                textTransform: "none",
                "&.Mui-disabled": {
                  color: "rgba(255, 255, 255, 0.267)",
                  borderColor: "rgba(255, 255, 255, 0.267)",
                },
              }}
            >
              {buttonText2}
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default CardObj;
