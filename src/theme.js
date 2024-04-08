import { createTheme } from "@mui/material/styles";

//mui theme settings
export const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
    },
    primary: {
      100: "#EDFCEA",
      200: "#C9F6BF",
      300: "#92EC7E",
      400: "#5CE33E",
      main: "#49DF28",
    },
    secondary: {
      100: "#E8E8E8",
      main: "#B8B8B8",
      200: "#707070",
      300: "#292929",
      400: "#111111",
      500: "#0F0F0F",
      600: "#0B0B0B",
    },
  },
  typography: {
    fontFamily: "Albert Sans, sans-serif",
    allVariants: {
      color: "secondary.main",
    },
  },
});
