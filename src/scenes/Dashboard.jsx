import React from "react";
import Box from "@mui/material/Box";
import logo from "../assets/images/cardanogpt_logo.png";
import CardObj from "../components/CardObj";
import DoubleCardObj from "../components/DoubleCardObj";

const Dashboard = () => {
  return (
    <Box width={"100%"} marginTop={"6rem"}>
      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems="stretch"
        rowGap="2rem"
        m="2rem"
      >
        <CardObj
          title="Total Portfolio Value (CGI)"
          amount="12.33"
          buttonText1="Stake CGI"
          buttonText2="Buy CGI Tokens"
          width={"40%"}
        />
        <CardObj
          title="Total Portfolio Value (ADA)"
          amount={252.32}
          buttonText1="Launch How To Buy ADA"
          width={"50%"}
          image={logo}
          outlined
        />
        <DoubleCardObj
          title1="Total Staked"
          amount1={52.11}
          buttonText1="Manage Positions"
          title2="Claimable Token"
          amount2={2.01}
          buttonText2="Claim Now"
          width={"50%"}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
