import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";

const TableObj = ({ title, rows, children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="3rem"
      alignItems="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        mt="3rem"
        alignItems="center"
        sx={{
          border: "1px solid",
          borderRadius: "3rem",
          borderColor: "secondary.300",
          padding: "2rem",
        }}
        width="90%"
      >
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography
            variant="h4"
            sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}
          >
            {title}
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton color="secondary.100">
              <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
            <IconButton>
              <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
            <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
              1 of 5
            </Typography>
          </Box>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "#0F0F0F",
            color: "#FFFFFF",
          }}
        >
          <Table
            sx={{ minWidth: 600, color: "#ffffff" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead sx={{ color: "#ffffff" }}>
              <TableRow>
                {rows.map((row) => (
                  <TableCell>{row}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            {children}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TableObj;
