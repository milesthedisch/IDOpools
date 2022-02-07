import React from "react";
import { AppBar, Button, Box, Container, Typography } from "@mui/material";
import Account from "./Account/Account";
import Logo from "./Icons/LogoText";
import Chains from "./Chains";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const NavItem = ({ to, text }) => {
  return (
    <Link style={{ marginRight: "16px" }} to={to}>
      <Typography variant="h6">{text}</Typography>
    </Link>
  );
};

const Header = () => {
  let location = useLocation();

  console.log(location.pathname);
  if (location.pathname == "/") {
    return (
      <Box>
      <AppBar
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: '1px',
        position: "static"
        }}
        >
 
        <Link to="/">
        <Logo sx={{width: "200px", height: "60px"}}/>
        </Link>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
          <NavItem to="/trading" text="Trading" />
          <NavItem to="/trading" text="Staking" />
          <NavItem to="/trading" text="Documentation" />
          <Link to="/select">
            <Button variant="contained">Open App</Button>
          </Link>
        </Box>
      </AppBar>
    </Box>
    )
  } 
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "static",
      }}
    >
      <Logo sx={{color: "#000", width: "200px", height: "60px"}} />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Account />
        <Chains />
      </Box>
    </AppBar>
  )
};

export default Header;
