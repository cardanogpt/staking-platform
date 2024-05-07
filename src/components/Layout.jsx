import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./SideBar";
import Nav from "./Nav";
//import ScrollTop from "./ScrollTop";
import StakeModal from "./StakeModal";
import CompleteStakeModal from "./CompleteStakeModal";

export default function Layout({ children }) {
  //drawer width in percentage
  const drawerWidth = 20;
  //state for auth
  const [auth, setAuth] = React.useState(false);

  //state for stake modal
  const [stakeModal, setStakeModal] = React.useState(false);
  const handleStakeModalOpen = () => setStakeModal(true);

  //state for stake complete modal
  const [completeModal, setCompleteModal] = React.useState(false);

  return (
    <>
      {/* Scroll to top when component reloads */}
      {/*     <ScrollTop /> */}
      <Box
        minHeight={"100vh"}
        width={"100vw"}
        sx={{ display: "flex", bgcolor: "secondary.600", color: "#ffffff" }}
      >
        {/* Normalize CSS */}
        <CssBaseline />
        <Nav auth={auth} setAuth={setAuth} drawerWidth={drawerWidth} />
        <>
          <SideBar />
          {/*  show pc only text if viewed on mobile */}

          <Box ml={`${drawerWidth}%`} pt={2} width={"100%"}>
            {/* Component Children Wrapper https://reactrouter.com/en/main/components/outlet */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              color="secondary.main"
              bgcolor="secondary.600"
              padding="1rem"
              width="100%"
              height="100%"
              textAlign="center"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <h1>PC View Only</h1>
            </Box>
            <Box
              component={"main"}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              {
                // Render the children components with props
                React.cloneElement(children, {
                  auth,
                  setAuth,
                  stakeModal,
                  handleStakeModalOpen,
                })
              }
            </Box>
            <StakeModal
              openModal={stakeModal}
              setModalOpen={setStakeModal}
              setCompleteModalOpen={setCompleteModal}
            />
            <CompleteStakeModal
              openModal={completeModal}
              setModalOpen={setCompleteModal}
            />
          </Box>
        </>
      </Box>
    </>
  );
}
