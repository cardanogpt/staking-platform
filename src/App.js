import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import StakeModal from "./components/StakeModal";
import CompleteStakeModal from "./components/CompleteStakeModal";
import logo from "./assets/images/cardanogpt_logo.png";

//drawer wodth in percentage
const drawerWidth = 20;

//nav titles
const navTitles = {
  "/": "Connect",
  "/dashboard": "Dashboard",
  "/stake": "Stake",
  "/manage-positions": "Manage Positions",
};

function App() {
  //state for auth
  const [auth, setAuth] = React.useState(false);

  //state for page and nav title
  const location = window.location.pathname;
  const [title, setTitle] = React.useState(navTitles[location]);

  //state for stake modal
  const [stakeModal, setStakeModal] = React.useState(false);
  const handleStakeModalOpen = () => setStakeModal(true);

  //state for stake complete modal
  const [completeModal, setCompleteModal] = React.useState(false);

  //set page title
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      {/* Scroll to top when component reloads */}
      <ScrollTop />
      <Box
        minHeight={"100vh"}
        width={"100vw"}
        sx={{ display: "flex", bgcolor: "secondary.600", color: "#ffffff" }}
      >
        {/* Normalize CSS */}
        <CssBaseline />
        <Nav
          auth={auth}
          setAuth={setAuth}
          title={title}
          drawerWidth={drawerWidth}
        />
        {window.innerWidth < 768 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="secondary.main"
            bgcolor="secondary.600"
            padding="1rem"
            width="100%"
            textAlign="center"
            ml={`${drawerWidth}%`}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "5rem", height: "5rem", filter: "opacity(0.2)" }}
            />
            <h1>PC View Only</h1>
          </Box>
        ) : (
          <>
            <SideBar setTitle={setTitle} />
            {/*  show pc only text if viewed on mobile */}

            <Box ml={`${drawerWidth}%`} pt={2} width={"100%"}>
              {/* Component Children Wrapper https://reactrouter.com/en/main/components/outlet */}
              <Outlet
                context={{ auth, setAuth, stakeModal, handleStakeModalOpen }}
                setTitle={navTitles[window.location.pathname]}
              />
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
        )}
      </Box>
    </>
  );
}

export default App;
