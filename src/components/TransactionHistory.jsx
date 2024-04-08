import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TransactionData } from "../data";
import { LuCopy } from "react-icons/lu";
import { RiShareBoxLine } from "react-icons/ri";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";

const Transaction = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="10rem"
      alignItems="center"
      width="100%"
    >
      <Box width="90%" display="flex" justifyContent="space-between">
        <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
          Transaction History
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
          width: "90%",
        }}
      >
        <Table
          sx={{ minWidth: 600, color: "#ffffff" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead sx={{ color: "#ffffff" }}>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Lock Duration</TableCell>
              <TableCell>Date & Time </TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TransactionData.map((row) => (
              <TableRow sx={{ "td, th": { border: 0, color: "#ffffff" } }}>
                <TableCell component="th" scope="row">
                  {row.amount}
                </TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.datetime}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color={row.status === "Pending" ? "secondary" : "success"}
                    sx={{
                      color: "#ffffff",
                      fontSize: "0.7rem",
                      backgroundColor:
                        row.status === "Pending"
                          ? "rgba(255, 246, 222, 0.094)"
                          : "rgba(73, 223, 40, 0.1)",
                      borderColor:
                        row.status === "Pending"
                          ? "rgba(255, 246, 222, 0.2)"
                          : "rgba(237, 252, 234, 0.2)",
                    }}
                  >
                    {row.status}
                  </Button>
                </TableCell>
                <TableCell display="flex" ml="1rem" sx={{ gap: "1rem" }}>
                  <LuCopy color="#49DF28" />
                  <RiShareBoxLine color="#ffffff" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transaction;
