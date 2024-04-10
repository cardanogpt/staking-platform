import React from "react";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { TransactionData } from "../data";
import { LuCopy } from "react-icons/lu";
import { RiShareBoxLine } from "react-icons/ri";
import TableObj from "./TableObj";

const Transaction = () => {
  return (
    <Box width="100%">
      <TableObj
        data={TransactionData}
        title={"Transaction History"}
        rows={["Amount", "Duration", "Date", "Status", "Action"]}
      >
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
                    padding: "0.1rem 0.4rem",
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
              <TableCell ml="1rem" sx={{ gap: "0.5rem", display: "flex" }}>
                <LuCopy color="#49DF28" />
                <RiShareBoxLine color="#ffffff" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableObj>
    </Box>
  );
};

export default Transaction;
