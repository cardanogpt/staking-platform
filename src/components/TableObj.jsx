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
        <Box width="100%" display="flex" justifyContent="space-between" mb={4}>
          <Typography
            variant="h4"
            sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}
          >
            {title}
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton
              sx={{
                color: "secondary.main",
                border: "1px solid",
                borderRadius: "5px",
              }}
            >
              <ArrowBackIcon
                sx={{ fontSize: "0.8rem" }}
                color="secondary.main"
              />
            </IconButton>
            <IconButton
              sx={{
                color: "secondary.main",
                border: "1px solid",
                borderRadius: "5px",
              }}
            >
              <ArrowForwardIcon
                sx={{ fontSize: "0.8rem" }}
                color="secondary.main"
              />
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
          }}
        >
          <Table
            sx={{ minWidth: 600, color: "#ffffff" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead sx={{ color: "secondary.200", borderBottom: "none" }}>
              <TableRow>
                {rows.map((row, i) => (
                  <TableCell
                    sx={{ borderBottom: "0px", color: "secondary.200" }}
                    key={i}
                  >
                    {row}
                  </TableCell>
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
