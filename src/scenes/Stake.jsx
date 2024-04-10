import React from "react";
import TransactionHistory from "../components/TransactionHistory";
import Box from "@mui/material/Box";
import CardObj from "../components/CardObj";
import DoubleCardObj from "../components/DoubleCardObj";
import StakeModal from "../components/StakeModal";
import CompleteStakeModal from "../components/CompleteStakeModal";

const Stake = () => {
  const [openModal, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const [completeModalOpen, setCompleteModalOpen] = React.useState(false);

  return (
    <Box width={"100%"} marginTop={"6rem"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="stretch"
        m="2rem"
      >
        <CardObj
          title="Total Portfolio Value (CGI)"
          amount="12.33"
          buttonText1="Stake CGI"
          buttonText2="Buy CGI Tokens"
          width={"40%"}
          handleModalOpen={handleModalOpen}
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
      <StakeModal
        openModal={openModal}
        setModalOpen={setModalOpen}
        setCompleteModalOpen={setCompleteModalOpen}
      />
      <CompleteStakeModal
        openModal={completeModalOpen}
        setModalOpen={setCompleteModalOpen}
      />
    </Box>
  );
};

export default Stake;
