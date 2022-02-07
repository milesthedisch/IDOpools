import React, { useState } from "react";
import Account from "./Account/Account";
import { Box, Typography, Paper } from "@mui/material";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

const Option = (props) => {
  const [elevation, setElevation] = useState(3);

  return (
    <Paper
      elevation={elevation}
      onMouseEnter={() => {
        setElevation(11);
      }}
      onMouseLeave={() => {
        setElevation(3);
      }}
      sx={{
        width: "400px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      <Typography
        color="#0453F1"
        fontSize="35px"
        sx={{ padding: "20px", display: "flex" }}
      >
        {props.children}
      </Typography>
    </Paper>
  );
};

const Select = () => {
  const { authenticate, isAuthenticated, account, chainId, logout } =
    useMoralis();

    if(isAuthenticated){
        return (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/invest">
            <Option>Stake Launchpad Tokens and Earn Venture Yield</Option>
            </Link>
            <Link to="/trade">
            <Option>Use APE FUEL to unlock Highier Tiers during IDO's</Option>
            </Link>
          </Box>
        );
    }else{
        return <Box sx={{ display: "flex", jusitfyContent: "center", minHeight: "700px" }}>
            <Box sx={{margin:"auto"}}> 
            <Account width="400px" padding="20px" fontSize="30px"/>
            </Box>
            </Box>
    }
};

export default Select;
