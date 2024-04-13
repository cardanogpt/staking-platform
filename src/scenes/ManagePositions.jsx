import React from "react";
import CardObj from "../components/CardObj";
import Box from "@mui/material/Box";
import TableObj from "../components/TableObj";
import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { positionData } from "../data";
import DoubleCardObj from "../components/DoubleCardObj";
import { useOutletContext } from "react-router-dom";

const ManagePositions = () => {
  const { handleStakeModalOpen } = useOutletContext();
  return (
    <Box width={"100%"} marginTop={"6rem"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="stretch"
        m="2rem"
        flexWrap="wrap"
      >
        <CardObj
          title="Total Portfolio Value (CGI)"
          amount="12.33"
          buttonText1="Stake CGI"
          buttonText2="Buy CGI Tokens"
          width={"40%"}
          handleModalOpen={handleStakeModalOpen}
        />
        <DoubleCardObj
          title1="Total Staked CGI"
          amount1={0.0}
          title2="Claimable Token"
          amount2={0.0}
          buttonText2="Claim Now"
          disabled={true}
          width={"50%"}
        />
      </Box>
      <TableObj
        data={positionData}
        title={"Positions"}
        rows={[
          "Name",
          "Total",
          "Unlock Date",
          "Initial",
          "Bonus",
          "Interest",
          "Action",
        ]}
      >
        <TableBody key={1}>
          {positionData &&
            positionData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "td, th": { border: 0, color: "#ffffff" } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.initial}</TableCell>
                <TableCell>{row.bonus}</TableCell>
                <TableCell>{row.interest}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    disabled={!row.redeem}
                    sx={{
                      color: "#ffffff",
                      padding: "0.1rem 0.4rem",
                      fontSize: "0.7rem",
                      "&.Mui-disabled": {
                        borderColor: "rgba(237, 252, 234, 0.2)",
                        color: "rgba(255, 255, 255, 0.224)",
                      },
                    }}
                  >
                    Redeem Stake
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </TableObj>
    </Box>
  );
};

export default ManagePositions;
