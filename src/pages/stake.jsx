import React from "react";
import TransactionHistory from "../components/TransactionHistory";
import Box from "@mui/material/Box";
import CardObj from "../components/CardObj";
import DoubleCardObj from "../components/DoubleCardObj";
import Head from "next/head";

const Stake = ({ handleStakeModalOpen }) => {
  return (
    <>
      <Head>
        <title>Stake</title>
      </Head>
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
        <TransactionHistory />
      </Box>
    </>
  );
};

export default Stake;
